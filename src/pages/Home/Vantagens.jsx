import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import CardVantagens from "../../components/Cards/CardVantagens";
import CardVantagensSmall from "../../components/Cards/CardVantagensSmall";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Estilos da paginação
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; 

const VantagensBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  background: #000;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-image: fill 0 linear-gradient(#000, #0000);
  }
`;

const VantagensContainer = styled.section`
  width: 100%;
  position: relative;
  height: auto;
  z-index: 2;
  padding: 5% 0;

  @media (max-width: 768px){
    background: #000;
    height: auto;
    padding: 10% 0;
    }

    &::before{
        @media (max-width: 768px){
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(#000, #0000);
        }
    }
`;

const VantagensSection = styled.section`
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  max-width: 1280px;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

const VantagensTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  & > h1 {
    font-size: 36px;
    color: var(--color--white);
    font-family: var(--font--poppins);
    font-weight: 200;
    width: 50%;
    line-height: 100%;

    @media (max-width: 768px){
        font-size: 26px;
        width: 100%;
        text-align: center;
    }

    & > b {
      background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 400;
    }
  }

  & > a {
    font-size: 36px;
    color: var(--color--white);
    opacity: 0.2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        display: none;
    }
  }
`;

const VantagensCarrossel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
  position: relative; /* Necessário para o posicionamento absoluto do degradê */
  overflow: hidden; /* Garante que o efeito de degradê não ultrapasse os limites */

  /* Degradê aplicado apenas nos cantos */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 1) 100%);
    z-index: 2; /* Coloca o degradê acima do fundo */
    pointer-events: none; /* Impede que o degradê interfira na interação do usuário */

    @media (max-width: 768px){
        display: none;
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const Vantagens = () => {
  return (
    <>
      <VantagensContainer>
        <VantagensBackground></VantagensBackground>

        <VantagensSection>
          <VantagensTitle>
            <h1>
              <b>Vantagens</b> em ter um site conosco
            </h1>
            <a href="#">
              <BsArrowRight />
            </a>
          </VantagensTitle>

          <VantagensCarrossel>
            <Swiper
               loop={true} // Loop infinito
               autoplay={{
                 delay: 0, // Passa a cada 3 segundos
                 disableOnInteraction: false, // Não desativa o autoplay quando o usuário interage
               }}
               spaceBetween={50} // Espaço entre os slides
               slidesPerView={4} // Exibe 4 slides por vez no desktop
               freeMode={true} // Habilita o modo de transição contínua
               speed={5000} // Controla a velocidade do movimento contínuo
               modules={[Autoplay, FreeMode, Pagination]} // Inclui os módulos Autoplay, FreeMode e Pagination
               pagination={false} // Adiciona a paginação
              breakpoints={{
                0: {
                    slidesPerView: 1, // Exibe 1 slide por vez no mobile
                    spaceBetween: 10, // Menor espaço entre os slides no mobile
                },
                1080: {
                    slidesPerView: 4, // Exibe 1 slide por vez no mobile
                    spaceBetween: 10, // Menor espaço entre os slides no mobile
                  },
              }}
            >
              <StyledSwiperSlide>
                <div>
                  <CardVantagens
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                  <CardVantagensSmall
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagensSmall
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                  <CardVantagens
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagens
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                  <CardVantagensSmall
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagensSmall
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                  <CardVantagens
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                    <CardVantagens
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                  <CardVantagensSmall
                    title="Velocidade de entrega"
                    description="O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."
                  />
                </div>
              </StyledSwiperSlide>

              {/* Adicione mais slides conforme necessário */}
            </Swiper>
          </VantagensCarrossel>
        </VantagensSection>
      </VantagensContainer>
    </>
  );
};

export default Vantagens;
