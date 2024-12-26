import React from "react";

import Header from "../../components/Header/Header";
import Inicial from "./Inicial";
import Vantagens from "./Vantagens";
import FaixaClara from "../../components/Faixas/FaixaClara";
import Portfolio from "./Portfolio";
import Paraquem from "./Paraquem";
import Beneficios from "./Beneficios";
import Depoimentos from "./Depoimentos";
import FaixaEscura from "../../components/Faixas/FaixaEscura";
import Pacotes from "./Pacotes";
import Parceria from "./Parceria";
import FAQ from "./FAQ";

const Home = () => {
    return (
        <>
            <Header />
                <Inicial />
                    <Vantagens />
                    <FaixaClara />
                        <Portfolio />
                            <Paraquem />
                            <FaixaClara />
                                <Beneficios />
                                    <Depoimentos /> 
                                    <FaixaEscura />
                                        <Pacotes />
                                            <Parceria />
                                            <FaixaClara />
                                                <FAQ />
        </>
    )
}

export default Home;