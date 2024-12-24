import React from "react";
import styled from "styled-components";
import CardPacote from "../../components/Cards/CardPacote";

const PacotesAll = styled.section`
    width: 100%;
    max-width: 1280px;
    height: auto;
    padding: 5%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        padding: 10% 5%;    
    }
`

const PacotesTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    & > h1 {
        font-size: 28px;
        font-family: var(--font--poppins);
        font-weight: 200;
        line-height: 100%;
        width: 35%;
        color: var(--color--black);
        text-align: center;

        @media (max-width: 768px){
            width: 100%;
            font-size: 26px;
        }

        & > b{
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`

const PacotesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div {
        width: 30%;
        height: auto;

        @media (max-width: 768px){
            width: 100%;
        }
    }

`

const Pacotes = () => {
    return (
        <>
            <PacotesAll>

                <PacotesTitle>
                    <h1>O que <b>você busca</b>, escolha abaixo:</h1>
                </PacotesTitle>

                <PacotesContainer>
                    <div>
                        <CardPacote 
                        promoBold="3 MESES"
                        promo="de manutenção grátis"
                        valor="R$ 890,90"
                        servico="E-commerce"
                        listItems={[
                          "Ideal para capturar leads",
                          "Converter leads em vendas orgânicas",
                          "Aumentar visibilidade online",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                        ]}
                        />
                    </div>

                    <div>
                        <CardPacote 
                        promoBold="3 MESES"
                        promo="de manutenção grátis"
                        valor="R$ 890,90"
                        servico="Landing Page"
                        listItems={[
                          "Ideal para capturar leads",
                          "Converter leads em vendas orgânicas",
                          "Aumentar visibilidade online",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                        ]}
                        />
                    </div>

                    <div>
                        <CardPacote 
                        promoBold="3 MESES"
                        promo="de manutenção grátis"
                        valor="R$ 890,90"
                        servico="Institucional"
                        listItems={[
                          "Ideal para capturar leads",
                          "Converter leads em vendas orgânicas",
                          "Aumentar visibilidade online",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                          "Garantir suporte e manutenção",
                        ]}
                        />
                    </div>
                </PacotesContainer>

            </PacotesAll>
        </>
    )
}

export default Pacotes;