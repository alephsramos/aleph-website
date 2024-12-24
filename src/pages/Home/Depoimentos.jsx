import React from "react";
import styled from "styled-components";

import { BsArrowDown } from "react-icons/bs";

import CardDepoimento from "../../components/Cards/CardDepoimento";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules que você deseja usar (opcional, dependendo das funcionalidades)
import { Autoplay, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const DepoimentosAll = styled.section`
    width: 100%;
    max-width: 1280px;
    padding: 5% 5%;
    height: auto;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: 768px){
        padding: 10% 5%;
        gap: 30px;
    }
`

const DepoimentosIlha = styled.div`
    padding: 10px 30px;
    border-radius: 30px;
    background-color: var(--color--black);

    @media (max-width: 768px){
        padding: 8px 20px;
    }

    & > h2 {
        font-size: 18px;
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-weight: 400;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`

const DepoimentosSeta = styled.div`
    & > a {
        font-size: 28px;
        color: var(--color--purple);
        opacity: .6;
    }
`

const DepoimentosTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > h1 {
        font-size: 28px;
        font-family: var(--font--poppins);
        color: var(--color--black);
        font-weight: 200;
        line-height: 100%;
        text-align: center;

        @media (max-width: 768px){
            font-size: 26px;
        }

        & > b {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`

const DepoimentosCarrossel = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`

const Depoimentos = () => {
    return (
        <>
            <DepoimentosAll>

                <DepoimentosIlha>
                    <h2>Depoimentos</h2>
                </DepoimentosIlha>

                <DepoimentosSeta>
                    <a href="#">
                        <BsArrowDown />
                    </a>
                </DepoimentosSeta>

                <DepoimentosTitle>
                    <h1>Não tenha dúvidas, <b>escolha o certo!</b></h1>
                </DepoimentosTitle>

                <DepoimentosCarrossel>
                    <Swiper
                        modules={[Autoplay, Pagination]} // Inclui os módulos Autoplay, FreeMode e Pagination
                        loop={true} // Loop infinito
                        autoplay={{
                        delay: 2000, // Passa a cada 3 segundos
                        disableOnInteraction: false, // Não desativa o autoplay quando o usuário interage
                        }}
                        spaceBetween={30} // Espaço entre os slides
                        slidesPerView={3} // Exibe 4 slides por vez no desktop
                        
                        pagination={false} // Adiciona a paginação
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // Exibe 1 slide por vez no mobile
                            spaceBetween: 10, // Menor espaço entre os slides no mobile
                        },
                        1080: {
                            slidesPerView: 3, // Exibe 1 slide por vez no mobile
                            spaceBetween: 20, // Menor espaço entre os slides no mobile
                        },
                    }}
                    >
                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png"
                            nota="4.9"
                            empresa="Aleph Company"
                            depoimento="Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."
                            />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png"
                            nota="4.9"
                            empresa="Aleph Company"
                            depoimento="Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."
                            />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png"
                            nota="4.9"
                            empresa="Aleph Company"
                            depoimento="Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."
                            />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png"
                            nota="4.9"
                            empresa="Aleph Company"
                            depoimento="Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."
                            />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png"
                            nota="4.9"
                            empresa="Aleph Company"
                            depoimento="Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."
                            />
                    </SwiperSlide>
                </Swiper>
                </DepoimentosCarrossel>

            </DepoimentosAll>
        </>
    )
}

export default Depoimentos;