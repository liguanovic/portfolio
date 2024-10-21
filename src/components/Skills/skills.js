import React from 'react';
import Data from '../../Data/data.json';
import htmlCssLogo from '../../assets/pictures/html-css.png';
import reactLogo from '../../assets/pictures/react.png';
import javaScriptLogo from '../../assets/pictures/javascript.png';
import figmaLogo from '../../assets/pictures/figma.png';
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
                <h2>Compétences</h2>
                <p>{Data.presentation}</p>
            </header>

            {competences.map((competence, index) => (
                <article key={index}>
                    <h3>
                        <img src={logos[competence.titre]} alt={competence.texteAlternatif} />
                        <b>{competence.titre}</b>
                    </h3>
                    <ul>
                        {competence.listeCompetences.map((item, idx) => (
                            <li key={idx}>{item.description} {item.miseEnValeur && <strong>{item.miseEnValeur}</strong>} {item.contexte}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
}

export default Skills;
