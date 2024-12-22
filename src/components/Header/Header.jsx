import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 95%;
  max-width: 1140px;
  height: 8vh;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  position: fixed;
  border-radius: 0 0 15px 15px;
  background-color: #00000050;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: opacity 1s ease;
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
    const handleScroll = () => {
      setScrolling(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setScrolling(false), 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <HeaderContainer style={{ opacity: scrolling ? 0.4 : 1 }}>
      <HeaderImage>
        <a href="#">
          <img
            src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png"
            alt="logo"
          />
        </a>
      </HeaderImage>
    </HeaderContainer>
  )
}

export default Header
