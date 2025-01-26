import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";

import './Styles/global.css';
import './Styles/reset.css';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Inicializando SpeedInsights
  SpeedInsights({
    beforeSend: (payload) => {
      // Exemplo de configuração: ajuste conforme necessário
      console.log("Payload enviado:", payload);
      return payload; // Certifique-se de retornar o payload modificado ou original
    },
  });

  useEffect(() => {
    const updateAOS = () => {
      const duration = window.innerWidth > 1000 ? 1500 : 1000; // Define a duração com base na largura da tela

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
      <Home />
    </>
  );
}

export default App;
