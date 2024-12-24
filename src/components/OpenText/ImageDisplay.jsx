import React from "react";
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out;
  }
`;

const ImageDisplay = ({ images, activeIndex }) => {
  console.log("Active Index:", activeIndex);
  console.log("Images Array:", images);

  if (activeIndex === null || activeIndex < 0 || activeIndex >= images.length) {
    return <div>Nenhuma imagem selecionada.</div>; // Mensagem para depuração
  }

  return (
    <ImageWrapper>
      <img src={images[activeIndex]} alt={`Imagem ${activeIndex + 1}`} />
    </ImageWrapper>
  );
};

export default ImageDisplay;
