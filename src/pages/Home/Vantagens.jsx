import React, { useEffect } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import CardVantagens from "../../components/Cards/CardVantagens";
import CardVantagensSmall from "../../components/Cards/CardVantagensSmall";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Estilos da paginação
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; 

import AOS from "aos";
import "aos/dist/aos.css"; 

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

  @media (max-width: 768px) {
    gap: -50px!important;
  }

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
      <VantagensContainer>
        <VantagensBackground></VantagensBackground>

        <VantagensSection>
          <VantagensTitle>
            <h1 data-aos="fade-up-right" data-aos-delay="100">
              <b>Vantagens</b> em ter um site conosco
            </h1>
            <a href="#">
              <BsArrowRight data-aos="fade-in" data-aos-delay="400" />
            </a>
          </VantagensTitle>

          <VantagensCarrossel data-aos="fade-up-right" data-aos-delay="400">
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
                    title="Velocidade"
                    description=" Seus projetos são desenvolvidos com agilidade, garantindo a entrega rápida de sites funcionais e modernos, sem comprometer a qualidade. Ideal para quem precisa de resultados prontos no menor tempo possível."
                  />
                  <CardVantagensSmall
                    title="Qualidade"
                    description="Cada site criado reflete atenção aos detalhes, com design profissional e performance impecável."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagensSmall
                    title="Otimização"
                    description=" Seus sites são otimizados, garantindo carregamento rápido, navegação fluida e compatibilidade com todos os dispositivos"
                  />
                  <CardVantagens
                    title="SEO"
                    description="Seus sites já são construídos com estratégias de SEO integradas, aumentando a visibilidade nos motores de busca e atraindo tráfego qualificado. Você não entrega só um site bonito, mas também eficaz."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagens
                    title="Autenticidade"
                    description="Você cria sites únicos e personalizados, refletindo a identidade de cada cliente e diferenciando-se de modelos genéricos. Cada projeto é exclusivo, pensado para destacar o cliente no mercado."
                  />
                  <CardVantagensSmall
                    title="Versatilidade"
                    description="Com a capacidade de atender diferentes nichos e demandas, seu site se adapta ao que deseja."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagensSmall
                    title="Comunicação"
                    description="Você mantém uma comunicação clara e aberta durante todo o processo, garantindo que você esteja sempre informado e satisfeito com tudo."
                  />
                  <CardVantagens
                    title="Completo"
                    description="Solução completa, que vai além do design: desde registro de domínio e hospedagem até estratégias para redes sociais e integrações com ferramentas de marketing."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                    <CardVantagens
                    title="Manutenção"
                    description="Seus sites são desenvolvidos de forma que possam ser facilmente atualizados e mantidos, com suporte contínuo para garantir que tudo esteja sempre funcionando perfeitamente."
                  />
                  <CardVantagensSmall
                    title="Escalabilidade"
                    description="Seus sites prontos para crescer junto com o seu negócio, permitindo a adição de novas funcionalidades e se adaptando às demandas futuras do mercado."
                  />
                </div>
              </StyledSwiperSlide>

              <StyledSwiperSlide>
                <div>
                  <CardVantagensSmall
                    title="Desempenho"
                    description="Seus sites são projetados para desempenho máximo, com alta velocidade de carregamento."
                  />
                  <CardVantagens
                    title="Vendas"
                    description="Seus sites não são apenas vitrines, mas ferramentas estratégicas para aumentar as conversões e vendas, com design persuasivo, CTAs bem posicionados e integração com plataformas de pagamento."
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
