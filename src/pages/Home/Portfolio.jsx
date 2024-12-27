import React, { useEffect } from "react";
import styled, {keyframes} from "styled-components";
import Button03 from "../../components/Buttons/button03";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; // para autoplay
import "swiper/css"; // CSS base do Swiper
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css"; 

import { BsArrowDown } from "react-icons/bs";

const AnimacaoSetaTop = keyframes`
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-10px);
    }
`

const PortfolioAll = styled.section`
    width: 100%;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    height: auto;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 10% 0;
    }
`

const PortfolioTexts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }

    & > div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;

        @media (max-width: 768px) {
            align-items: center;
        }

        & > h1 {
            font-size: 36px;
            font-family: var(--font--poppins);
            color: var(--color--black);
            font-weight: 200;
            width: 70%;
            line-height: 100%;

            @media (max-width: 768px) {
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

            & > b {
                background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
                color: transparent;
                -webkit-background-clip: text;
                font-weight: 400;
            }
        }

        & > p{
            font-family: var(--font--poppins);
            color: var(--color--black);
            font-size: 18px;
            width: 70%;
            line-height: 100%;
            font-weight: 200;

            @media (max-width: 768px) {
                font-size: 16px;
                text-align: center;
                width: 100%;
            }

            & > a {
                color: var(--color--purple);
                text-decoration: underline;
                font-weight: 300;
            }
        }
    }
`

const PortfolioCarrossel = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    position: relative;
    margin-top: -50px;
    margin-bottom: -50px;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 2;
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 1) 100%);
        pointer-events: none;
    }

    .swiper-slide{
        display: flex;
        position: relative;
        z-index: 1;
    }

    & > div img {
        width: 90%;
        margin-left: 5%;
        height: auto;
        object-fit: contain;
    }
`

const PortfolioSeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

    & > a{
        font-size: 32px;
        color: var(--color--purple);
        opacity: 0.4;
        animation: ${AnimacaoSetaTop} 2s linear infinite alternate-reverse;
    }
`


const Portfolio = () => {

    useEffect(() => {
        const updateAOS = () => {
            const duration = window.innerWidth > 800 ? 1500 : 800; // Define a duração com base na largura da tela

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
        <>
            <PortfolioAll>
                <PortfolioTexts>
                    <div>
                        <h1 data-aos="fade-up-right" data-aos-delay="100"><b>As empresas</b> sempres nos escolhem</h1>
                        <p data-aos="fade-up" data-aos-delay="300">Escolher a qualidade é a melhor escolha, veja nossos <a href="#">pacotes.</a></p>
                    </div>
                    <div data-aos="fade-in" data-aos-delay="500">
                        <Button03 />
                    </div>
                </PortfolioTexts>

                <PortfolioCarrossel data-aos="fade-up-right" data-aos-delay="300">
                <Swiper
                    modules={[Autoplay, FreeMode, Pagination]} 
                    loop={true}
                    autoplay={{
                        delay: 0, // Passa a cada 3 segundos
                        disableOnInteraction: false, // Não desativa o autoplay quando o usuário interage
                    }}
                    spaceBetween={0} // Espaço entre os slides
                    slidesPerView={3} // Exibe 4 slides por vez no desktop
                    freeMode={true} // Habilita o modo de transição contínua
                    speed={4000} // Controla a velocidade do movimento contínuo// Inclui os módulos Autoplay, FreeMode e Pagination
                    pagination={false} // Adiciona a paginação
                    breakpoints={{
                    0: {
                        slidesPerView: 1, // Exibe 1 slide por vez no mobile
                        spaceBetween: 10, // Menor espaço entre os slides no mobile
                    },
                    1080: {
                        slidesPerView: 3, // Exibe 1 slide por vez no mobile
                        spaceBetween: 10, // Menor espaço entre os slides no mobile
                        },
                    }}
                >
                    {/* Transforma cada <div> do seu código em <SwiperSlide> */}
                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/10_gyjqvc.png"
                        alt="le ange"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/18_zyjvhk.png"
                        alt="allox"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/19_f8pi7x.png"
                        alt="your name"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/13_cnu2os.png"
                        alt="thelastofus"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/12_nkzjqe.png"
                        alt="lifegreen"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/15_wehzuc.png"
                        alt="monkey"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/11_yvl8cq.png"
                        alt="etech"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/16_xklqek.png"
                        alt="wizardZ"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/14_vunelf.png"
                        alt="coffe"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/17_pgciit.png"
                        alt="horizen"
                        />
                    </a>
                    </SwiperSlide>

                    <SwiperSlide>
                    <a href="#">
                        <img
                        src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/20_hfglfp.png"
                        alt="yellow"
                        />
                    </a>
                    </SwiperSlide>
                </Swiper>
                </PortfolioCarrossel>

                <PortfolioSeta data-aos="fade-down" data-aos-delay="200">
                    <a href="#">
                        <BsArrowDown />
                    </a>
                </PortfolioSeta>
            </PortfolioAll>
        </>
    )
}

export default Portfolio;