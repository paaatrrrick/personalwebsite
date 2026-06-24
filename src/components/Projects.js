import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../constants/projects';
import './projects.css';

const ALL = 'All';

const Projects = () => {
    const [activeTech, setActiveTech] = useState(ALL);

    const techs = useMemo(() => {
        const found = new Set();
        projects.forEach((project) => project.tech.forEach((tech) => found.add(tech)));
        return [ALL, ...Array.from(found).sort()];
    }, []);

    const visible = projects.filter(
        (project) => activeTech === ALL || project.tech.includes(activeTech)
    );

    return (
        <main className="projects">
            <header className="projectsHeader">
                <Link to="/" className="projectsBack">← Back home</Link>
                <h1>Projects</h1>
                <p>Side projects I've built and maintain. Most are open source.</p>
            </header>
            <div className="projectsFilter">
                {techs.map((tech) => (
                    <button
                        key={tech}
                        className={`projectsFilterButton${activeTech === tech ? ' active' : ''}`}
                        onClick={() => setActiveTech(tech)}
                        aria-pressed={activeTech === tech}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <div className="projectsGrid">
                {visible.map((project) => (
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
