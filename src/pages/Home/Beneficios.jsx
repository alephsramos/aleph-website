import React, { useState} from "react";
import styled from "styled-components";
import OpenText from "../../components/OpenText/OpenText";
import ImageDisplay from "../../components/OpenText/ImageDisplay";
import Button01 from "../../components/Buttons/button01";

const BackgroundBeneficios = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    background: #000;

    @media (max-width: 768px){
        display: none;
    }

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1735047503/backgroundBeneficios_ubdtb9.jpg');
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        opacity: .3;
        border-image: fill 0 linear-gradient(#0000, #000);
    }
`

const BeneficiosContainer = styled.section`
    width: 100%;
    position: relative;
    height: auto;
    z-index: 2;
    padding: 5% 0;
    overflow: hidden;

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
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1735047503/backgroundBeneficios_ubdtb9.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(#000, #0000);
        }
    }
`


const BeneficiosSection = styled.section`
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
  gap: 50px;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const BeneficiosTitle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }

    & > h1 {
        font-family: var(--font--poppins);
        color: var(--color--white);
        font-size: 28px;
        font-weight: 200;
        line-height: 100%;
        width: 80%;

        @media (max-width: 768px) {
            font-size: 24px;
            text-align: center;
            width: 100%;
        }

        & > b {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`

const BeneficiosImage = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`

const Beneficios = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const textItems = [
        { title: "Exclusividade", text: "Contato direto com o desenvolvedor para atendimento ágil e personalizado." },
        { title: "Manutenção gratuita", text: "Suporte completo por 12 meses, sem custos extras." },
        { title: "Aprenda a mexer no seu site", text: "Treinamento prático para você gerenciar tudo com facilidade." },
        { title: "Descontos em outros serviços", text: "Acesso a condições especiais em serviços adicionais." },        
    ];
  
    const imageUrls = [
      "https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png",
      "https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",
      "https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png",
      "https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",
    ];
  
    const handleTextClick = (index) => {
        console.log(`Texto clicado: ${index}`);
        setActiveIndex(index);
      };

    return (
        <>
            <BeneficiosContainer>
                <BackgroundBeneficios></BackgroundBeneficios>

                <BeneficiosSection>

                    <BeneficiosTitle>
                        <h1 data-aos="fade-up-right" data-aos-delay="100"><b>Para te motivar</b>, dedicamos alguns benefícios a você</h1>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <OpenText items={textItems} onTextClick={handleTextClick} />
                        </div>

                        <Button01 />
                    </BeneficiosTitle>

                    <BeneficiosImage data-aos="fade-up-left" data-aos-delay="200">
                        <ImageDisplay images={imageUrls} activeIndex={activeIndex} />
                    </BeneficiosImage>

                </BeneficiosSection>

            </BeneficiosContainer>
        </>
    )
}

export default Beneficios;