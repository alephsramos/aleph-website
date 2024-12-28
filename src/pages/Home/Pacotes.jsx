import React from "react";
import styled from "styled-components";
import CardPacote from "../../components/Cards/CardPacote";

const PacotesAll = styled.section`
    width: 100%;
    max-width: 1280px;
    height: auto;
    padding: 5%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        padding: 10% 5%;    
    }
`

const PacotesTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    & > h1 {
        font-size: 28px;
        font-family: var(--font--poppins);
        font-weight: 200;
        line-height: 100%;
        width: 35%;
        color: var(--color--black);
        text-align: center;

        @media (max-width: 768px){
            width: 100%;
            font-size: 26px;
        }

        & > b{
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`

const PacotesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div {
        width: 30%;
        height: auto;

        @media (max-width: 768px){
            width: 100%;
        }
    }

`

const Pacotes = () => {
    return (
        <>
            <PacotesAll>

                <PacotesTitle>
                    <h1 data-aos="fade-up" data-aos-delay="100">O que <b>você busca</b>, escolha abaixo:</h1>
                </PacotesTitle>

                <PacotesContainer>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <CardPacote 
                        promoBold="3 MESES"
                        promo="de manutenção grátis"
                        valor="R$890,90"
                        servico="Landing Page"
                        listItems={[
                          "Alta conversão",
                          "Tempo de carregamento veloz",
                          "Versátilidade de design",
                          "Instalação de Pixel",
                          "Aumentar a visibilidade online",
                          "Aumento de leads qualificados",
                          "Design responsivo ( mobile-first )",
                          "Otimização para SEO",
                          "Integração com ferramentas de automação de marketing",
                          "Geração de tráfego pago eficaz"
                        ]}
                        />
                    </div>

                    <div  data-aos="fade-up" data-aos-delay="200">
                        <CardPacote 
                        promoBold="3 MESES"
                        promo="de manutenção grátis"
                        valor="R$1290,90"
                        servico="Institucional"
                        listItems={[
                          "Posicionamento de marca",
                          "Versatilidade de design",
                          "Instalação de Pixel",
                          "Apresentação de equipe e valores da empresa",
                          "Integração com redes sociais",
                          "Seções interativas (ex.: FAQ, chat ao vivo)",
                          "Blog ou seção de noticias",
                          "Facilitação de contato (formulários e links rápidos)",
                          "Geração de tráfego pago eficaz"
                        ]}
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <CardPacote 
                        promoBold="3 MESES"
                        promo="de manutenção grátis"
                        valor="R$1890,90"
                        servico="E-commerce"
                        listItems={[
                          "Alto número de vendas",
                          "Sistemas fácil de manipular",
                          "Instalação de Pixel",
                          "Função de recomendação de produtos",
                          "Carrinho de compras otimizado",
                          "Pagamento integrado e seguro",
                          "Monitoramento de comportamento do usúarios",
                          "Ofertas personalizadas e promoções",
                          "Sistema de reviews e avaliações de produtos",
                        ]}
                        />
                    </div>
                </PacotesContainer>

            </PacotesAll>
        </>
    )
}

export default Pacotes;