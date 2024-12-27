import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    height: auto;
    gap: 20px;
    background-color: #353535;
    border-radius: 20px;
`

const CardTopo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: -10px;

    & > img {
        object-fit: contain;
        width: 100px;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        & > img {
            width: 25px;
            height: auto;
            object-fit: contain;
        }

        & > p {
            background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-family: var(--font--poppins);
            font-size: 20px;
            font-weight: 600;
        }
    }
`

const CardTexts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    & > h1 {
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-size: 26px;
        font-weight: 400;
        line-height: 120%;
    }

    & > p {
        font-size: 16px;
        color: var(--color--white);
        opacity: 1;
        font-weight: 100;
        font-family: var(--font--poppins);
        line-height: 120%;
        font-style: italic;
    }
`

const CardDepoimento = ({ logo, nota, empresa, depoimento}) => {
    return (
        <>
            <Card>
                <CardTopo>
                    <img src={logo}/>
                    <div>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png" />
                        <p>{nota}</p> 
                    </div>
                </CardTopo>
                <CardTexts>
                    <h1>{empresa}</h1>
                    <p>
                    {depoimento}
                    </p>
                </CardTexts>
            </Card>
        </>
    )
}

export default CardDepoimento;