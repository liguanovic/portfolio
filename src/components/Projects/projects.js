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
            <section className="works">
                {Data.projects.map((project, index) => (
                    <article key={index} style={{ backgroundColor: project.color }}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="githubIcon" />
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}${project.pictures.src}`}
                                    alt={project.pictures.alt}
                                    className="project-picture" />
                            </figure>
                            <ul className="langages">
                                {project.langages.map((langage, langIndex) => (
                                    <li key={langIndex} className="langagesBox">{langage}</li>
                                ))}
                            </ul>
                            <p>{project.description}</p>
                        </a>
                    </article>
                ))}
            </section>
            <a href="https://github.com/liguanovic" target="_blank" rel="noopener noreferrer" className="button">
                Voir plus
            </a>
        </section>
    );
}

export default Projects;
