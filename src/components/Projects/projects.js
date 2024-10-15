import React from 'react';
import Data from '../../Data/data.json';
import { FaGithub } from "react-icons/fa";
import './projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <header>
                <h1>Mon Portfolio</h1>
                <p>{Data.presentationProjet}</p>
            </header>
            <article className="works">
                {Data.projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="githubIcon" aria-label="Lien vers le dépôt GitHub" />
                        <figure>
                            <img
                                src={`${process.env.PUBLIC_URL}${project.pictures.src}`}
                                alt={project.pictures.alt}
                                className="project-picture"
                            />
                        </figure>
                        <ul className="langages">
                            {project.langages.map((langage, langIndex) => (
                                <li key={langIndex} className="langagesBox">{langage}</li>
                            ))}
                        </ul>
                        <p>{project.description}</p>
                    </a>
                ))}
            </article>
            <a href="https://github.com/liguanovic" target="_blank" rel="noopener noreferrer" className="button">
                Voir plus
            </a>
        </section>
    );
}

export default Projects;
