import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

const FormBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  background: #000;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg");
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-image: fill 0 linear-gradient(#000, #0000);
  }
`;

const FormContainer = styled.section`
  width: 100%;
  position: relative;
  height: auto;
  z-index: 2;
  padding: 5%;

  @media (max-width: 768px){
    background: #000;
    height: auto;
    padding: 10% 0;
    }

    &::before{
        @media (max-width: 768px){
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(#000, #0000);
        }
    }
`;


const FormSection = styled.section`
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  max-width: 1280px;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 2.5% 5% 5% 5%;

  @media (max-width: 768px){
        gap: 50px;
        padding: 5% 5% 20% 5%;
        flex-direction: column-reverse;
    }
`;

const FormTexts = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > img {
        width: 50px;
        object-fit: contain;

        @media (max-width: 768px){
            width: 30px;
        }
    }

    & > h1 {
        font-size: 32px;
        font-family: var(--font--poppins);
        font-weight: 200;
        color: var(--color--white);
        line-height: 100%;

        @media (max-width: 768px){
            text-align: center;
            font-size: 28px;
        }

        & > b {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }

    & > p{
        font-size: 16px;
        font-weight: 200;
        color: var(--color--white);
        font-family: var(--font--poppins);
        line-height: 110%;
        opacity: 0.7;

        @media (max-width: 768px){
            text-align: center;
        }
    }

    & > form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        width: 100%;

        @media (max-width: 768px){
            align-items: center;
            gap: 15px;
        }

        & > label {
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-family: var(--font--poppins);
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
            font-size: 16px;
            width: 80%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 14px;
            }

            & > input {
                padding: 12px;
                background: transparent;
                border: 1px solid var(--color--white);
                border-radius: 5px;
                font-family: var(--font--poppins);
                font-weight: 200;
                background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
                -webkit-background-clip: text;
                color: transparent;

                &::placeholder {
                    color: var(--color--white);
                    font-family: var(--font--poppins);
                    font-weight: 200;
                    opacity: 0.4;
                    font-size: 12px;
                }
            }
        }

        & > button {
            padding: 12px;
            width: 80%;
            background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
            border-radius: 5px;
            border: none;
            color: var(--color--white);
            font-weight: 400;
            font-family: var(--font--poppins);
            cursor: pointer;

            @media (max-width: 768px){
                margin-top: 5px;
                width: 100%;
            }
        }

        & > span {
            font-family: var(--font--poppins);
            font-size: 12px;
            color: var(--color--white);
            font-weight: 200;
            opacity: 0.6;
            line-height: 100%;

            @media (max-width: 768px){
                text-align: center;
            }
        }
    }
`

const FormImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        position: absolute;
        left: -70%;
        width: 150%;
        z-index: -1;
        opacity: 0.05;
    }

    & > img {
        width: 90%;
        object-fit: contain;
    }
`

const Formulario = () => {
    return (
        <>
         <FormContainer>
                <FormBackground></FormBackground>

                <FormSection>
                    <FormTexts>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png" />
                        <h1>Entre em <b>contato</b> conosco</h1>
                        <p>Ao preencher o formulário, você está de acordo com os nossos termos de serviço, e politica de dados</p>

                        <form id="contactForm">
                            <label>
                                Seu Nome
                                <input type="text" id="name" placeholder="Aleph Silva Ramos" required/>
                            </label>
                            <label>
                                Seu e-mail
                                <input type="email" id="email" placeholder="aleph@gmail.com" required/>
                            </label>
                            <label>
                                WhatsApp
                                <input type="tel" id="tel" placeholder="24981411940" required/>
                            </label>

                            <button type="submit">Enviar e entrar em contato</button>

                            <span>*Usaremos essas informações apenas para fins de contato</span>
                        </form>
                    </FormTexts>

                    <FormImage>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735223665/mockupWpp_1_nlq60u.png" />
                    </FormImage>

                    <Footer />
                </FormSection>

                
            </FormContainer>
        </>
    )
}

export default Formulario;