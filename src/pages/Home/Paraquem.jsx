import React from "react";
import styled from "styled-components";
import CardParaquem from "../../components/Cards/CardParaquem";

import { BsBag } from "react-icons/bs";


const ParaquemAll = styled.section `
    width: 100%;
    height: auto;
    padding-bottom: 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 0 2.5% 5% 2.5%;
    }

`

const ParaquemTexts = styled.div`
    width: 100%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


    & > h1 {
        font-size: 32px;
        font-weight: 200;
        line-height: 100%;
        text-align: center;
        font-family: var(--font--poppins);

        @media (max-width: 768px) {
            font-size: 26px;
        }

        & > b {
            background: linear-gradient(120deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`

const ParaquemCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: 10px;
    padding-right: 5%;

    @media (max-width: 768px) {
        padding-right: 0;
    }
`

const ParaquemCard = styled.div`
    width: 50%;
    height: 350px;

    @media (max-width: 768px) {
        display: none;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 15px 15px 0px;
    }
`

const ParaquemCards2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: 10px;
    margin-top: -40px;
    padding-left: 5%;

    @media (max-width: 768px) {
        padding-left: 0%;
    }
`

const ParaquemCard2 = styled.div`
    width: 50%;
    height: 350px;

    @media (max-width: 768px) {
        display: none;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px 0px 0px 15px;
    }
`

const Paraquem = () => {
    return (
        <>
            <ParaquemAll>
                <ParaquemTexts>
                    <h1>Para quem <b>nós somos?</b></h1>
                </ParaquemTexts>

                <ParaquemCards>
                    <ParaquemCard>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg" />
                    </ParaquemCard>
                    <CardParaquem 
                    borderRadius="15px"
                    bgColor="var(--color--black)"
                    bBackground="linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))"
                    icon={BsBag}   
                    boldText="Empresas"
                    normalText="que querem aumentar suas vendas"
                    />

                    <CardParaquem 
                    borderRadius="15px"
                    bgColor="var(--color--purple)"
                    bBackground="linear-gradient(90deg, #dbdbdb, var(--color--blue))"
                    icon={BsBag}   
                    boldText="Pessoas"
                    normalText="que querem aumentar sua visibilidade"
                    />
                </ParaquemCards>

                <ParaquemCards2>
                    <CardParaquem 
                    borderRadius="15px"
                    bgColor="var(--color--blue)"
                    bBackground="linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))"
                    icon={BsBag}   
                    boldText="Empresas"
                    normalText="que querem aumentar suas vendas"
                    />

                    <CardParaquem 
                    borderRadius="15px"
                    bgColor="var(--color--gray)"
                    bBackground="linear-gradient(90deg, #dbdbdb, var(--color--blue))"
                    icon={BsBag}   
                    boldText="Pessoas"
                    normalText="que querem aumentar sua visibilidade"
                    />

                    <ParaquemCard2>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg" />
                    </ParaquemCard2>
                </ParaquemCards2>
            </ParaquemAll>
        </>
    )
}

export default Paraquem;