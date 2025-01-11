import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

import { database } from "../../firebaseConfig"; // Certifique-se de ter configurado o Firebase
import { ref, push } from "firebase/database";

// Animações
const popupAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: #35353550;
  backdrop-filter: blur(1px);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  color: var(--color--purple);
  font-size: 24px;
  transition: transform .2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Popup = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #ffffff10;
  backdrop-filter: blur(2px);
  border-radius: 15px 15px 0 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${popupAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--poppins);
`;

const CloseButton = styled.button`
  position: absolute;
  transform: translateX(-50%);
  top: -15px;
  left: 50%;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--color--purple);
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color--white);
  transition: all .2s ease;

  &:hover {
    color: #000;
    font-size: 22px;
  }
`;

const MessagesContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 10px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--poppins)!important;
`;

const MessageRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => (props.sent ? "flex-end" : "flex-start")};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--poppins)!important;
`;

const ProfilePicture = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50px 50px 0px 50px ;
  margin-right: ${(props) => (props.sent ? "0" : "8px")};
  margin-left: ${(props) => (props.sent ? "8px" : "0")};
  background-color: var(--color--white);
  padding: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.sent ? "#dcf8c6" : "#ffffff")};
  border-radius: 10px ;
  padding: 8px;
  max-width: 70%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  white-space: pre-wrap; // Adicione esta linha
  font-family: var(--font--poppins)!important;
  font-size: 12px;
`;

const BotName = styled.div`
  font-size: 10px;
  background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: var(--font--poppins)!important;
`;

const TypingDots = styled.div`
  display: inline-block;
  font-size: 14px;
  font-style: italic;
  color: #b6b6b6;
  font-family: var(--font--poppins)!important;

  &::after {
    content: "";
    animation: typingDots 1s infinite;
  }

  @keyframes typingDots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--poppins)!important;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 12px;
  font-family: var(--font--poppins)!important;
  background: #ffffff;
  color: var(--color--purple);
  width: 70%;

  &::placeholder{
    font-size: 10px!important;
    font-weight: 400!important;
    padding-left: 5px;
  }
`;

const SendButton = styled.button`
  padding: 8px 20px;
  background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: var(--font--poppins)!important;
  font-weight: 400;
  width: 30%;
`;

const WhatsAppButton = ({ footerRendered }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userPhone, setUserPhone] = useState("Número inválido");
  const [phoneRequested, setPhoneRequested] = useState(false);
  const [finalStage, setFinalStage] = useState(false);

  const whatsappLink = "https://w.app/5AaZMJ";
  const botProfilePic =
    "https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png";

  const handleSend = async () => {
    if (message.trim() === "") return;

    const userMessage = { id: Date.now(), text: message, sent: true };
    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = message.trim();
    setMessage("");

    setIsTyping(true);

    if (!phoneRequested && userPhone === "Número inválido") {
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "Entendo, estamos aqui para te ajudar da melhor forma possível! 😁\n\nPara um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂",
            sent: false,
          },
        ]);
        setPhoneRequested(true);
      }, 1500);
      return;
    }

    if (phoneRequested && userPhone === "Número inválido") {
      const isNumber = /^\d+$/.test(currentMessage);
      const phoneToStore = isNumber ? currentMessage : "Número inválido";
      setUserPhone(phoneToStore);
  
      if (isNumber) {
          try {
              const date = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD
              const dbRef = ref(database, `data/${date}/whatsappNumbers`);
              await push(dbRef, { phone: phoneToStore, timestamp: Date.now() });
              console.log("Número salvo no Firebase:", phoneToStore);
          } catch (error) {
              console.error("Erro ao salvar o número no Firebase:", error);
          }
      }
  
      setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
              ...prev,
              {
                  id: Date.now(),
                  text: isNumber
                      ? "Muito obrigado! Entraremos em contato em breve. 📞"
                      : "Você não informou um número válido.",
                  sent: false,
              },
          ]);
          setTimeout(() => {
              setFinalStage(true);
          }, 500);
          setPhoneRequested(false);
      }, 1500);
      return;
  }

    setIsTyping(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleCloseChat = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setMessages([
        {
          id: 1,
          text: "Olá! Percebemos que você estava navegando pelo site. \n\nComo podemos te ajudar? 🤗",
          sent: false,
        },
      ]);
    }, 45000); // 45 segundos

    // cleanup
    return () => clearTimeout(timer);
  }, []); // <-- sem dependências

  return (
    <ButtonContainer>
      <Button
        onClick={() => window.open(whatsappLink, "_blank")}
        id="clickwpp"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <FaWhatsapp id="clickwpp" />
      </Button>
      {showPopup && (
        <Popup>
          <CloseButton onClick={handleCloseChat}>
            <IoClose />
          </CloseButton>
          <MessagesContainer>
            {messages.map((msg) => (
              <MessageRow key={msg.id} sent={msg.sent}>
                {!msg.sent && <ProfilePicture src={botProfilePic} alt="Bot" />}
                <MessageBox sent={msg.sent}>
                  {!msg.sent && <BotName>aleph</BotName>}
                  <div>{msg.text}</div>
                </MessageBox>
              </MessageRow>
            ))}
            {isTyping && (
              <MessageRow>
                <TypingDots />
              </MessageRow>
            )}
          </MessagesContainer>
          {!finalStage && (
            <InputContainer>
              <Input
                id="chat-iniciado"
                type="text"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <SendButton onClick={handleSend}>Enviar</SendButton>
            </InputContainer>
          )}
        </Popup>
      )}
    </ButtonContainer>
  );
};

export default WhatsAppButton;