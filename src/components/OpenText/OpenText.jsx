import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { BsChevronRight } from "react-icons/bs";

// Animação para abrir o texto
const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* Ajuste conforme o conteúdo */
    opacity: 1;
  }
`;

const OpenTextWrapper = styled.div`
  margin-bottom: 16px;
  cursor: pointer;

  h3 {
    margin: 0;
    font-size: 20px;
    font-family: var(--font--poppins);
    font-weight: ${({ isOpen }) => (isOpen ? "400" : "200")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    margin-top: 20px;
    border-bottom: 1px solid white;
    background: ${({ isOpen }) =>
      isOpen
        ? "linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))"
        : "transparent"};
    color: ${({ isOpen }) => (isOpen ? "transparent" : "white")};
    background-clip: ${({ isOpen }) => (isOpen ? "text" : "border-box")};
    -webkit-background-clip: ${({ isOpen }) =>
      isOpen ? "text" : "border-box"};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    .arrow {
      font-size: 14px;
      transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0)")};
      transition: transform 0.3s ease;
      color: var(--color--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .content {
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
    animation: ${({ isOpen }) => (isOpen ? slideDown : "none")} 0.3s ease;
    transition: max-height 0.3s ease-in-out;
    font-size: 14px;
    color: black;
    border-radius: 0 0 8px 8px;
    margin-top: 10px;
    color: var(--color--white);
    font-family: var(--font--poppins);
    font-weight: 100;
    width: 85%;
    line-height: 110%;
  }
`;

const OpenText = ({ items, onTextClick }) => {
    if (!onTextClick) {
      console.error("Prop 'onTextClick' não foi passada para o OpenText.");
    }
  
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleClick = (index) => {
      console.log(`OpenText clicked: ${index}`);
      setOpenIndex(openIndex === index ? null : index);
  
      // Certifique-se de que onTextClick está definido antes de chamá-lo
      if (onTextClick) {
        onTextClick(index);
      }
    };
  
    return (
      <>
        {items.map((item, index) => (
          <OpenTextWrapper
            key={index}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          >
            <h3>
              {item.title}
              <span className="arrow">
                <BsChevronRight />
              </span>
            </h3>
            <div className="content">{item.text}</div>
          </OpenTextWrapper>
        ))}
      </>
    );
  };
  
  export default OpenText;
  