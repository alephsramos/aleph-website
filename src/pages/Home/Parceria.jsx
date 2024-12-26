import React from "react";
import styled from "styled-components";
import Button02 from "../../components/Buttons/button02";
import Button03 from "../../components/Buttons/button03";

const ParceriaContainer = styled.section `
    width: 100%;
    max-width: 1280px;
    padding: 0 5%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;

    @media (max-width: 768px){
        padding: 5%;
    }
`

const ParceriaDiv = styled.div`
    width: 100%;
    background-color: var(--color--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 0px;
        border-radius: 25px;
    }
`

const ParceriaTitle = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding: 50px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        padding: 50px 30px;
        text-align: center;
        gap: 50px;
    }

    & > h1 {
        font-size: 32px;
        font-family: var(--font--poppins);
        font-weight: 400;
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;

        @media (max-width: 768px){
            line-height: 100%;
            font-size: 32px;
        }
    }

    & > p {
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-size: 16px;
        font-weight: 200;
        line-height: 110%;
        margin-top: -10px;
        width: 90%;

        @media (max-width: 768px){
            width: 95%;
        }
    }

    & > img {
        width: 200px;
        object-fit: contain;

        @media (max-width: 768px){
            display: none;
        }
    }
`

const ParceriaLista = styled.div`
    width: 45%;
    background-color: var(--color--white);
    border-radius: 25px;
    padding: 30px 25px; 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin: 20px;

    @media (max-width: 768px){
        width: 95%;
        margin-bottom: 10px;
        border-radius: 20px;
    }

    & > ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    list-style: none;
    padding-left: 0;
    margin-left: 0;

    & > li {
      position: relative;
      padding-left: 35px;
      font-family: var(--font--poppins);
      font-size: 16px;
      color: var(--color--black);
      font-weight: 300;

      &::before {
        content: '';
        display: inline-block;
        background: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png')
          no-repeat center center;
        background-size: contain;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`

const Parceria = () => {
    return (
        <>
            <ParceriaContainer>

                <ParceriaDiv>

                    <ParceriaTitle>

                        <h1>Torne-se nosso parceiro</h1>
                        <p>Se você está buscando criar mais de 1 site, oferecemos uma proposta para você, se tornando nosso parceiro, você garante preços exclusivos</p>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png" />

                    </ParceriaTitle>

                    <ParceriaLista>
                        <ol>
                            <li>Descontos exclusivo em qualquer tipo de site</li>
                            <li>Descontos exclusivo em qualquer tipo de site</li>
                            <li>Descontos exclusivo em qualquer tipo de site</li>
                            <li>Descontos exclusivo em qualquer tipo de site</li>
                        </ol>

                        <Button03 />
                    </ParceriaLista>

                </ParceriaDiv>

            </ParceriaContainer>
        </>
    )
}

export default Parceria;