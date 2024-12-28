import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    transition: opacity 0.5s ease-in-out;
    object-fit: contain;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  }
`;

const ImageDisplay = ({ images, activeIndex }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Faz o fade-out
    setIsVisible(false);

    // Aguarda a transição para iniciar o fade-in
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  if (activeIndex === null || activeIndex < 0 || activeIndex >= images.length) {
    return <div>Nenhuma imagem selecionada.</div>;
  }

  return (
    <ImageWrapper isVisible={isVisible}>
      <img src={images[activeIndex]} alt={`Imagem ${activeIndex + 1}`} />
    </ImageWrapper>
  );
};

export default ImageDisplay;
