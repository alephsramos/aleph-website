import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";


const VantagensBackground = styled.div`
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
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg');
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        opacity: .3;
    }
`

const VantagensContainer = styled.section`
    width: 100%;
    position: relative;
    height: 140vh;
    z-index: 2;
`

const VantagensSection = styled.section`
    width: 100%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    max-width: 1280px;
    border: 1px solid red;
    position: relative;
    z-index: 2;
    height: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
`

const VantagensTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1{
        font-size: 36px;
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 200;
        width: 50%;
        line-height: 100%;

        & > b {
            background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }

    & > a {
        font-size: 36px;
        color: var(--color--white);
        opacity: .2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const VantagensCarrossel = styled.div`
    width: 100%;
    height: 70%;
    border: 1px solid red;
`

const Vantagens = () => {
    return (
        <>
            <VantagensContainer>
                <VantagensBackground></VantagensBackground>

                <VantagensSection>
                    <VantagensTitle>
                        <h1><b>Vantagens</b> em ter um site conosco</h1>
                        <a href="#">
                            <BsArrowRight />
                        </a>
                    </VantagensTitle>

                    <VantagensCarrossel>

                    </VantagensCarrossel>
                </VantagensSection>

            </VantagensContainer>
        </>
    )
}

export default Vantagens;