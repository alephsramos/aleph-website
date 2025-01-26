import React from "react";
import styled from "styled-components";

const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, var(--color--blue), var(--color--purple));
    transition: all 0.6s ease-in-out;

    @media (max-width: 768px) {
        border-radius: 15px;
    }

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        width: calc(100%);
        height: calc(100%);
        border-radius: 15px;
        background: transparent;
        border: 1px solid var(--color--black);
        z-index: -10;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.175, 0.285, 0.32, 1.275);
    }

    &::after {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 0;
        background: transparent;
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(100px);
    }

    &:hover::after {
        filter: blur(30px);
    }

    &:hover::before {
        transform: rotate(-180deg);
    }

    &:active::before {
        scale: 0.7;
    }

    &:hover {
        background: transparent;
        border: 1px solid var(--color--white);
    }

    &:hover > b {
        color: var(--color--black);
        background: transparent;
        font-weight: 400;
    }

    &:hover > img {
        filter: brightness(500%) invert(100%);
    }

    & > img {
        width: 20px;
        object-fit: contain;
        transition: all 0.2s ease-in-out;
        filter: brightness(-500%) invert(100%);
    }

    & > b {
        color: #fff;
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;
        transition: all 0.2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`;

const Button01 = () => {
    return (
        <>
            <Button id="click-button" data-aos="fade-up" data-aos-delay="200" onClick={() => { window.open("https://wa.me/24981411940", "_blank"); }}>
                <b>Solicitar orçamento</b>
                <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png" />
            </Button>
        </>
    );
};

export default Button01;
