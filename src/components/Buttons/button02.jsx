import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid var(--color--white);
    transition: all .2s ease-in-out;

    &:hover{
        background-color: var(--color--white);
    }

    &:hover > b {
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 400;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 200;
        font-size: 16px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
` 

const Button02 = () => {
    return (
        <>
            <Button id="click-button" data-aos="fade-up" data-aos-delay="200" onClick={() => { window.open("https://w.app/5AaZMJ", "_blank"); }}>
                <b>Saber mais</b>
            </Button>
        </>
    )
}

export default Button02;