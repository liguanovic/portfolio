import React from 'react';
import Data from '../../Data/data.json';
import htmlCssLogo from '../assets/pictures/html-css.png';
import reactLogo from '../assets/pictures/react.png';
import javaScriptLogo from '../assets/pictures/javascript.png';
import figmaLogo from '../assets/pictures/figma.png';
import './skills.css';

const Skills = ({ competences }) => {
    const logos = {
        "HTML/CSS": htmlCssLogo,
        "React": reactLogo,
        "JavaScript": javaScriptLogo,
        "Figma": figmaLogo
    };
    return (
        <section id="skills">
            <header>
                <h1>Compétences</h1>
                <p>{Data.presentation}</p>
            </header>

            <section>
                {competences.map((competence, index) => (
                    <article key={index}>
                        <figure>
                            <img src={logos[competence.titre]} alt={competence.texteAlternatif} />
                        </figure>
                        <section>
                            <h2>{competence.titre}</h2>
                            <ul>
                                {competence.listeCompetences.map((item, idx) => (
                                    <li key={idx}>{item.description} {item.miseEnValeur && <strong>{item.miseEnValeur}</strong>} {item.contexte}</li>
                                ))}
                            </ul>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Skills;
