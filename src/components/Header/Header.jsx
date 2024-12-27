import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import AOS from "aos"
import "aos/dist/aos.css"; 

const HeaderContainer = styled.header`
  width: auto;
  max-width: 1140px;
  height: 5vh;
  position: fixed;
  left: 50%;
  padding: 10px 20px;
  top: 10px;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: #00000050;
  backdrop-filter: blur(1px);
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media (max-width: 768px){
    height: 5vh;
  }

  /* Transição suave para subir/descer */
  transition: transform 2s ease;

  /* Quando scrolling = true, o header sobe (-100%) */
  /* Quando scrolling = false, ele volta para 0 */
  transform: ${({ scrolling }) =>
    scrolling
      ? 'translateX(-50%) translateY(-150%)'
      : 'translateX(-50%) translateY(0)'
  };
`

const HeaderImage = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    width: 70px;
    height: auto;
    & > img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`

function Header() {
  const [scrolling, setScrolling] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
          AOS.init({
              duration: 1500, // Duração em milissegundos
              offset: 20,     // Distância do scroll para ativar a animação
              easing: "ease-in-out", // Tipo de animação
              once: true,     // Se a animação ocorre apenas uma vez
          });
      }, []);

  useEffect(() => {
    const handleScroll = () => {
      // O usuário está rolando, então header sobe
      setScrolling(true)

      // Reinicia o timer de 3 segundos
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        // 3 segundos depois de parar de rolar, header desce
        setScrolling(false)
      }, 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <HeaderContainer scrolling={scrolling}>
      <HeaderImage data-aos="zoom-out-top" data-aos-delay="100" >
        <a href="#">
          <img
            src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png"
            alt="logo"
          />
        </a>
      </HeaderImage>
    </HeaderContainer>
  )
}

export default Header
