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

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & > img {
        width: 20px;
    }
    
` 

const Button03 = () => {
    return (
        <>
            <Button id="click-button">
                <b>Solicitar orçamento</b>
                <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"  />
            </Button>
        </>
    )
}

export default Button03;