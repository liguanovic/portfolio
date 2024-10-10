import React from "react";
import About from '../../components/About/about';
import Skills from '../../components/Skills/skills';
import Projects from '../../components/Projects/projects';
import Form from "../../components/Form/form";
import Data from "../../Data/data.json";

import './home.css';

const Home = () => {
    return (
        <main id="home">

            <div class="loader">
                <div class="loader__items">
                    <div class="loader__item loader__item--1"></div>
                    <div class="loader__item loader__item--2"></div>
                    <div class="loader__item loader__item--3"></div>
                </div>
            </div>

            <About />
            <Skills competences={Data.competences} />
            <Projects />
            <Form />
        </main>
    )
}

export default Home