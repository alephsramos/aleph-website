import React, { useEffect } from "react";
import styled from "styled-components";
// Import Swiper e módulos necessários
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; // para autoplay
import "swiper/css"; // CSS base do Swiper
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css"; 

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));

  @media (max-width: 768px){
    height: 5vh;
  }

  // Importante: se quiser manter esse estilo, aplique no conteúdo interno ou nos .swiper-slide
  .swiper-slide {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    img {
      object-fit: contain;
      width: 25px;
      height: 25px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }

    h3 {
      font-size: 20px;
      font-family: var(--font--poppins);
      font-weight: 400;
      color: var(--color--white);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const FaixaClara = () => {

  useEffect(() => {
          const updateAOS = () => {
              const duration = window.innerWidth > 500 ? 1000 : 500; // Define a duração com base na largura da tela
  
              AOS.init({
                  duration: duration, // Define a duração dinamicamente
                  offset: 20,         // Distância do scroll para ativar a animação
                  easing: "ease-in-out", // Tipo de animação
                  once: true,         // Se a animação ocorre apenas uma vez
              });
  
              AOS.refresh(); // Atualiza as animações ao mudar as configurações
          };
  
          // Adiciona um evento para atualizar a configuração ao redimensionar a janela
          window.addEventListener("resize", updateAOS);
  
          // Chama a função na montagem do componente
          updateAOS();
  
          // Remove o evento ao desmontar o componente
          return () => {
              window.removeEventListener("resize", updateAOS);
          };
      }, []);
  

  return (
    <Container data-aos="fade-in">
      <Swiper
        modules={[Autoplay, FreeMode, Pagination]} 
        loop={true}
        autoplay={{
            delay: 0, // Passa a cada 3 segundos
            disableOnInteraction: false, // Não desativa o autoplay quando o usuário interage
        }}
        spaceBetween={50} // Espaço entre os slides
        slidesPerView={4} // Exibe 4 slides por vez no desktop
        freeMode={true} // Habilita o modo de transição contínua
        speed={2500} // Controla a velocidade do movimento contínuo// Inclui os módulos Autoplay, FreeMode e Pagination
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
        <SwiperSlide>
          <div>
            <h3>Faça seu site conosco</h3>
            <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png" alt="icon" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <h3>Faça seu site conosco</h3>
            <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png" alt="icon" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <h3>Faça seu site conosco</h3>
            <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png" alt="icon" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <h3>Faça seu site conosco</h3>
            <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png" alt="icon" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <h3>Faça seu site conosco</h3>
            <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png" alt="icon" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default FaixaClara;
