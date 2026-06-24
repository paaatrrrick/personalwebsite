import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../constants/projects';
import './projects.css';

const ALL = 'All';

const Projects = () => {
    const [activeTech, setActiveTech] = useState(ALL);
    const [query, setQuery] = useState('');

    const techs = useMemo(() => {
        const found = new Set();
        projects.forEach((project) => project.tech.forEach((tech) => found.add(tech)));
        return [ALL, ...Array.from(found).sort()];
    }, []);

    const normalizedQuery = query.trim().toLowerCase();
    const visible = projects.filter((project) => {
        if (activeTech !== ALL && !project.tech.includes(activeTech)) return false;
        if (!normalizedQuery) return true;
        return (
            project.name.toLowerCase().includes(normalizedQuery) ||
            project.tagline.toLowerCase().includes(normalizedQuery) ||
            project.description.toLowerCase().includes(normalizedQuery)
        );
    });

    return (
        <main className="projects">
            <header className="projectsHeader">
                <Link to="/" className="projectsBack">← Back home</Link>
                <h1>Projects</h1>
                <p>Side projects I've built and maintain. Most are open source.</p>
            </header>
            <input
                className="projectsSearch"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                aria-label="Search projects"
            />
            <p className="projectsCount">Showing {visible.length} of {projects.length} projects</p>
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
                        <div className="projectHeading">
                            <h2 className="projectName">
                                <a href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
                            </h2>
                            <span className={`projectStatus ${project.status.toLowerCase()}`}>{project.status}</span>
                        </div>
                        <p className="projectTagline">{project.tagline}</p>
                        <p className="projectDescription">{project.description}</p>
                        <ul className="projectTech">
                            {project.tech.map((tech) => (
                                <li key={tech} className="projectTechItem">{tech}</li>
                            ))}
                        </ul>
                    </article>
                ))}
                {visible.length === 0 && <p className="projectsEmpty">No projects match your search.</p>}
            </div>
        </main>
    );
};

export default Projects;
