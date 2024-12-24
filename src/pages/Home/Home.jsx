import React from "react";
import Header from "../../components/Header/Header";
import Inicial from "./Inicial";
import Vantagens from "./Vantagens";
import FaixaClara from "../../components/Faixas/FaixaClara";
import Portfolio from "./Portfolio";
import Paraquem from "./Paraquem";
import Beneficios from "./Beneficios";

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
        </>
    )
}

export default Home;