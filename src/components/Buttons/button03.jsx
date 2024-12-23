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
        font-weight: 400;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & > img {
        width: 25px;
    }
    
` 

const Button03 = () => {
    return (
        <>
            <Button>
                <b>Solicitar orçamento</b>
                <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png"  />
            </Button>
        </>
    )
}

export default Button03;