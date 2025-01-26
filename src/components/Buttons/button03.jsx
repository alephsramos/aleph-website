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
    background: linear-gradient(120deg, var(--color--purple), #dbdbdb, var(--color--blue));
    transition: all .2s ease-in-out;

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    &:hover{
        background: #353535;
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


    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & > img {
        width: 20px;
        transition: all .2s ease-in-out; 
    }
    
` 

const Button03 = () => {
    return (
        <>
            <Button id="click-button" data-aos="fade-up" data-aos-delay="200" onClick={() => { window.open("https://wa.me/24981411940", "_blank"); }}>
                <b>Solicitar orçamento</b>
                <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"  />
            </Button>
        </>
    )
}

export default Button03;