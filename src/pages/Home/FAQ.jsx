import React, { useState } from "react";
import styled from "styled-components";

import { BsArrowDown } from "react-icons/bs";
import OpenText from "../../components/OpenText/OpenText";
import Button01 from "../../components/Buttons/button01";


const FaqBackground = styled.div`
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
    background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-image: fill 0 linear-gradient(0deg, #000, #0000);
  }
`;

const FaqContainer = styled.section`
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
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(0deg, #000, #0000);
        }
    }
`;


const FaqSection = styled.section`
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
  flex-direction: column;
  gap: 80px;
  padding: 0 5%;

  @media (max-width: 768px){
        gap: 50px;
        padding: 5%;
    }
`;

const FaqTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px){
        gap: 5px;
    }

    & > h1 {
        background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-size: 36px;
        font-family: var(--font--poppins);
        font-weight: 400;
        line-height: 100%;
        text-align: center;

        @media (max-width: 768px){
            font-size: 28px;
        }
    }

    & > p {
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 200;
        font-size: 16px;
        opacity: 0.7;
    }
`

const FaqPerguntas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 0px;
    }

    & > div:nth-child(2){
        @media (max-width: 768px){
            margin-top: -20px;
        }
    }
`

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    const textItems = [
        { 
            title: "Qual a vantagem de eu ter um site?", 
            text: "Ter um site profissional aumenta sua visibilidade, fortalece a sua marca e permite atender seus clientes de forma eficiente, 24 horas por dia." 
        },
        { 
            title: "Como faço um site para vender?", 
            text: "Crio sites otimizados para vendas, com integração a meios de pagamento, carrinho de compras e estratégias para aumentar sua conversão." 
        },
        { 
            title: "Quantas seções tem no site?", 
            text: "Sim! Seu site será personalizado, com quantas seções forem necessárias para atender às suas necessidades e objetivos." 
        },
        { 
            title: "Qual tipo de linguagem você usa?", 
            text: "Uso tecnologias modernas como React, HTML5, CSS3, JavaScript e frameworks que garantem um site rápido e funcional." 
        },
        
    ];

    const textItems2 = [
        { 
            title: "O valor mínimo para um site é?", 
            text: "O valor inicial depende da complexidade do projeto, mas ofereço opções acessíveis para atender diferentes necessidades." 
        },
        { 
            title: "Existe garantia na entrega do site?", 
            text: "Sim! A entrega é garantida dentro do prazo combinado, com suporte técnico incluso por 3 meses para ajustes e manutenção." 
        },
        { 
            title: "Quais são os meios de contato?", 
            text: "Você pode entrar em contato via WhatsApp, e-mail ou diretamente pelas redes sociais. Estou sempre disponível para atender você!" 
        },
        { 
            title: "A hospedagem do site está inclusa?", 
            text: "A hospedagem pode ser inclusa como um serviço adicional, garantindo um pacote completo e funcional." 
        },
        
    ];

    const handleTextClick = (index) => {
        console.log(`Texto clicado: ${index}`);
        setActiveIndex(index);
      };
    
    return (
        <>
            <FaqContainer>
                <FaqBackground></FaqBackground>

                <FaqSection>

                    <FaqTitle>
                        <h1 data-aos="fade-down" data-aos-delay="100">Ficou com dúvidas?</h1>
                        <p data-aos="fade-in" data-aos-delay="500">Veja as perguntas mais recorrentes</p>
                    </FaqTitle>

                    <FaqPerguntas>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <OpenText items={textItems} onTextClick={handleTextClick} />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <OpenText items={textItems2} onTextClick={handleTextClick} />
                        </div>
                    </FaqPerguntas>

                    <Button01 />
                </FaqSection>
            </FaqContainer>
        </>
    )
}

export default FAQ;