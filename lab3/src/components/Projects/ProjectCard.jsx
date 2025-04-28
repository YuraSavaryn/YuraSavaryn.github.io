export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className={`project-img ${project.image}`}>
                <div className={`project-status ${project.status}`}>
                    {project.statusText}
                </div>
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                    <span>🏆 {project.hackathon}</span>
                    <span>{project.timeStatus}</span>
                </div>
                <div className="project-progress">
                    <div className="progress-bar">
                        <div 
                            className={`progress ${project.status === 'completed' ? 'completed' : ''}`} 
                            style={{ width: project.progress }}
                        ></div>
                    </div>
                    <span>{project.progressText}</span>
                </div>
                <div className="project-actions">
                    <button>{project.actions[0]}</button>
                    <button>{project.actions[1]}</button>
                </div>
            </div>
        </div>
    );
}