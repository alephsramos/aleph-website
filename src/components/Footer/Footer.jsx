import React from "react";
import styled from "styled-components";

import WhatsAppButton from "../WhatsApp/WhatsApp";

const FooterContainer = styled.footer`
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);
    background-color: var(--color--white);
    width: 100%;
    max-width: 1112px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-family: var(--font--poppins);

    @media (max-width: 768px){
        width: 90%;    
        bottom: -10px;
        padding: 8px 20px;
        background-color: #ffffff10;
        backdrop-filter: blur(2px);
    }

    & > p {
        font-size: 12px;
        font-weight: 400;
        background: linear-gradient(90deg, var(--color--purple), #353535, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;

        @media (max-width: 768px){
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
        }
     
        &:nth-child(1){
            @media (max-width: 768px){
                display: none;
            }
        }

    }

    & > img{
        position: absolute;
        width: 20px;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 768px){
            position: relative;
            left: 0;
            transform: translateX(0);
        }
    }
`

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <p data-aos="fade-left" data-aos-delay="200">Todos os direitos reservados | desde 2024</p>
                <img data-aos="fade-up" data-aos-delay="300"src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png" />
                <p data-aos="fade-right" data-aos-delay="400">
                Desenvolvido por <a href="#"> Aleph </a>
                </p>

            </FooterContainer>

        </>
    )
}

export default Footer;