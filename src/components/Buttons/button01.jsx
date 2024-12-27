import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: var(--color--white);

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > img {
        width: 20px;
        object-fit: contain;
    }

    & > b{
        background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
` 

const Button01 = () => {
    return (
        <>
            <Button id="click-button" data-aos="fade-up" data-aos-delay="200">
                <b>Solicitar orçamento</b>
                <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"  />
            </Button>
        </>
    )
}

export default Button01;