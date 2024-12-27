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

                <DepoimentosIlha data-aos="fade-down" data-aos-delay="100">
                    <h2 data-aos="zoom-in" data-aos-delay="300">Depoimentos</h2>
                </DepoimentosIlha>

                <DepoimentosSeta data-aos="fade-down" data-aos-delay="300">
                    <a href="#">
                        <BsArrowDown />
                    </a>
                </DepoimentosSeta>

                <DepoimentosTitle>
                    <h1 data-aos="fade-up" data-aos-delay="400">Não tenha dúvidas, <b>escolha o certo!</b></h1>
                </DepoimentosTitle>

                <DepoimentosCarrossel data-aos="fade-up" data-aos-delay="400">
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
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/6_bv5zu4.svg"
                            nota="4.9"
                            empresa="Le Ange"
                            depoimento="Nosso site ficou simplesmente perfeito! Ele reflete o charme, sofisticação e o acolhimento que queríamos transmitir para nossos hóspedes. A experiência com o Aleph foi impecável, desde o design até o suporte pós-lançamento. Recomendo de olhos fechados!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/5_tnvyoj.svg"
                            nota="4.7"
                            empresa="Al Lox"
                            depoimento="Precisávamos de um site que fosse moderno, funcional e ao mesmo tempo destacasse nossos produtos eletrônicos. O Aleph superou todas as expectativas! O design ficou incrível e a navegação é super intuitiva, o que aumentou nossas vendas online."
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/7_berqb9.svg"
                            nota="4.9"
                            empresa="Life Green"
                            depoimento="O site desenvolvido pelo Aleph conseguiu traduzir perfeitamente nossa missão de sustentabilidade. Ficamos impressionados com o cuidado nos detalhes e o alinhamento com nossos valores. Muito bom mesmo!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/4_teeinx.svg"
                            nota="4.6"
                            empresa="WizardZ"
                            depoimento="Como agência de marketing, precisávamos de um site que destacasse nossa criatividade. O Aleph criou algo que não apenas impressiona visualmente, mas também é altamente funcional. A entrega foi rápida e o suporte constante é ótimo!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/3_qckj5u.svg"
                            nota="4.9"
                            empresa="Etech"
                            depoimento="Para uma escola online como a nossa, um site bem estruturado é essencial. O Aleph entregou uma plataforma educativa completa, com design intuitivo e ferramentas que facilitam a experiência dos alunos. Estamos muito satisfeitos com o resultado!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardDepoimento 
                            logo="https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/2_xqs2va.svg"
                            nota="4.9"
                            empresa="Meal Monkey"
                            depoimento="O Aleph transformou nosso site em uma verdadeira extensão da nossa marca! Agora temos um espaço que não só facilita pedidos online, mas também encanta nossos clientes com um design moderno e funcional. Um investimento que valeu a pena!"
                        />
                    </SwiperSlide>

                </Swiper>
                </DepoimentosCarrossel>

            </DepoimentosAll>
        </>
    )
}

export default Depoimentos;