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
    transition: all .2s ease-in-out;

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    &:hover{
        background-color: transparent;
        border: 1px solid var(--color--white);
    }

    &:hover > b {
        color: var(--color--white);
        background: transparent;
        font-weight: 400;
    }

    &:hover > img {
        filter: brightness(500%);
    }

    & > img {
        width: 20px;
        object-fit: contain;
        transition: all .2s ease-in-out;
    }

    & > b{
        background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
` 

const Button01 = () => {
    return (
        <>
            <Button id="click-button" data-aos="fade-up" data-aos-delay="200" onClick={() => { window.open("https://w.app/5AaZMJ", "_blank"); }}>
                <b>Solicitar orçamento</b>
                <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"  />
            </Button>
        </>
    )
}

export default Button01;