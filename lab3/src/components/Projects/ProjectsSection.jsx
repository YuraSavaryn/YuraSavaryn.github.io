import ProjectCard from './ProjectCard.jsx';
import { data } from './data.js';

export default function ProjectsSection() {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects-grid">
                    {data.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}