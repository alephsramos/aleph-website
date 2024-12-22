import React from "react";
import Header from "../../components/Header/Header";
import Inicial from "./Inicial";
import Vantagens from "./Vantagens";

const Home = () => {
    return (
        <>
            <Header />
                <Inicial />
                    <Vantagens />
        </>
    )
}

export default Home;