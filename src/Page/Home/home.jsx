import React from "react";
import About from '../../components/About/about';
import Skills from '../../components/Skills/skills';
import Data from "../../Data/data.json";

import './home.css';

const Home = () => {
    return (
        <main id="home">
            <About />
            <Skills competences={Data.competences} />
        </main>
    )
}

export default Home