import React from "react";
import styled from "styled-components";
import Button01 from "../Buttons/button01";

/* Container geral */
const Card = styled.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`;

/* Este bloco fica fixo no topo, com 100px de altura e fundo branco */
const WhiteTopSpace = styled.div`
  position: sticky;
  top: 0;
  height: 20px;
  background-color: #fff; 
  z-index: 1; /* abaixo do cabeçalho real */
`;

/* Agrupa CardMeses + CardBlack em um “cabeçalho” único */
const HeaderWrapper = styled.div`
  position: sticky;
  top: 20px; /* Começa a 100px do topo */
  z-index: 2; /* acima do WhiteTopSpace */
`;

// Card roxo de promoções
const CardMeses = styled.div`
  background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0px;

  & > h4 {
    font-family: var(--font--poppins);
    color: var(--color--white);
    font-weight: 200;
    font-size: 16px;

    & > b {
      font-weight: 400;
    }
  }
`;

// Card preto (valor, botão, etc.)
const CardBlack = styled.div`
  background-color: var(--color--black);
  color: var(--color--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  & > h1 {
    font-family: var(--font--poppins);
    font-weight: 600;
    font-size: 24px;
    background: linear-gradient(
      90deg,
      var(--color--purple),
      #dbdbdb,
      var(--color--blue)
    );
    -webkit-background-clip: text;
    color: transparent;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;

    & > p {
      color: var(--color--white);
      font-family: var(--font--poppins);
      font-weight: 200;
      font-size: 14px;
      line-height: 100%;
    }

    & > span {
      font-family: var(--font--roboto);
      font-weight: 400;
      font-size: 18px;
      background: linear-gradient(
        90deg,
        var(--color--purple),
        #dbdbdb,
        var(--color--blue)
      );
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

// Lista de itens
const CardList = styled.div`
  border-radius: 0 0 20px 20px;
  padding: 20px;
  background-color: #5339df10;
  margin-top: -20px;

  & > ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    padding-top: 20px;

    & > li {
      position: relative;
      padding-left: 30px;
      font-family: var(--font--poppins);
      font-size: 14px;
      color: var(--color--black);
      font-weight: 300;

      &::before {
        content: '';
        display: inline-block;
        background: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png')
          no-repeat center center;
        background-size: contain;
        width: 20px;
        height: 20px;

        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

const CardPacote = ({ promoBold, promo, valor, servico, listItems = [] }) => {
  return (
    <Card>

      {/* 1) Espaço branco sticky de 100px no topo */}
      <WhiteTopSpace />

      {/* 2) Cabeçalho sticky que inicia 100px abaixo do topo */}
      <HeaderWrapper>
        <CardMeses>
          <h4>
            <b>{promoBold}</b> {promo}
          </h4>
        </CardMeses>

        <CardBlack>
          <h1>{servico}</h1>
          <div>
            <p>Economize agora</p>
            <span>{valor}</span>
          </div>
          <Button01 />
        </CardBlack>
      </HeaderWrapper>

      {/* Conteúdo principal que rola por baixo do WhiteTopSpace e do Header */}
      <CardList>
        <ol>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </CardList>

    </Card>
  );
};

export default CardPacote;
