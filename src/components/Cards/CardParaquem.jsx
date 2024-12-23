import React from "react";
import styled from "styled-components";

import { BsPersonWorkspace } from "react-icons/bs";
import Button01 from "../Buttons/button01";


export const Card = styled.div`
  width: 25%;
  height: 350px;
  border-radius: ${(props) => props.borderRadius || "20px"};
  background-color: ${(props) => props.bgColor || "var(--color--black)"};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 50%;
    height: 200px;
    align-items: center;
    padding: 20px;
    }

  & > a {
    color: var(--color--white);
    font-size: 60px;

    @media (max-width: 768px) {
        font-size: 30px;
    }
  }

  & > h4 {
    color: var(--color--white);
    font-family: var(--font--poppins);
    line-height: 110%;
    font-size: 24px;
    font-weight: 200;
    width: 90%;

    @media (max-width: 768px) {
        font-size: 16px;
        width: 100%;
        text-align: center;
    }

    & > b {
      /* Background do <b> dinâmico, com fallback para um gradiente */
      background: ${(props) =>
        props.bBackground ||
        "linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))"};
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 400;
      margin-right: 1cqh;
    }
  }

  & > button {
    white-space: nowrap;

    @media (max-width: 768px) {
    display: none;
    }
  }
`;

const CardParaquem = ({
    borderRadius,
    bgColor,
    bBackground,
    icon: Icon,
    boldText,
    normalText,
  }) => {
    return (
      <Card
        borderRadius={borderRadius}
        bgColor={bgColor}
        bBackground={bBackground}
      >
        <a href="#">
          {/* Se a prop “icon” for passada, usa ela; se não, usa um ícone default (BsPersonWorkspace) */}
          {Icon ? <Icon /> : <BsPersonWorkspace />}
        </a>
        <h4>
          {/* Se não passar nada pra boldText, exibe “Texto em Negrito” como placeholder */}
          <b>{boldText || "Texto em Negrito"}</b>
          {/* Se não passar nada para normalText, exibe esse texto como placeholder */}
          {normalText || "Texto normal de exemplo"}
        </h4>
        {/* Exemplo de um botão, mas se quiser, pode ser removido */}
        <Button01 />
      </Card>
    );
  };
  
  export default CardParaquem;