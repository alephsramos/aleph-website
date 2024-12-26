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
    border-image: fill 0 linear-gradient(#000, #0000);
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
            border-image: fill 0 linear-gradient(#000, #0000);
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
        { title: "Comunicação facilitada", text: "Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades" },
        { title: "Manutenção gratuita", text: "Garantimos suporte gratuito por 12 meses." },
        { title: "Aprenda a mexer no seu site", text: "Receba treinamentos para gerenciar o seu site." },
        { title: "Descontos em outros serviços", text: "Aproveite descontos exclusivos." },
    ];

    const textItems2 = [
        { title: "2Comunicação facilitada", text: "Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades" },
        { title: "2Manutenção gratuita", text: "Garantimos suporte gratuito por 12 meses." },
        { title: "2Aprenda a mexer no seu site", text: "Receba treinamentos para gerenciar o seu site." },
        { title: "2Descontos em outros serviços", text: "Aproveite descontos exclusivos." },
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
                        <h1>Ficou com dúvidas?</h1>
                        <p>Veja as perguntas mais recorrentes</p>
                    </FaqTitle>

                    <FaqPerguntas>
                        <div>
                            <OpenText items={textItems} onTextClick={handleTextClick} />
                        </div>
                        <div>
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