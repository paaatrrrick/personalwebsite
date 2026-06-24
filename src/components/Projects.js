import { Link } from 'react-router-dom';
import projects from '../constants/projects';
import './projects.css';

const Projects = () => {
    return (
        <main className="projects">
            <header className="projectsHeader">
                <Link to="/" className="projectsBack">← Back home</Link>
                <h1>Projects</h1>
                <p>Side projects I've built and maintain. Most are open source.</p>
            </header>
            <div className="projectsGrid">
                {projects.map((project) => (
                    <article key={project.name} className="projectCard">
                        <h2 className="projectName">
                            <a href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
                        </h2>
                        <p className="projectTagline">{project.tagline}</p>
                        <p className="projectDescription">{project.description}</p>
                        <ul className="projectTech">
                            {project.tech.map((tech) => (
                                <li key={tech} className="projectTechItem">{tech}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </main>
    );
};

export default Projects;
