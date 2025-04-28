export default function ProjectControlSection() {
    return (
        <div className="projects-control">
            <div className="projects-filter">
                <button className="active">Всі проєкти</button>
                <button>Активні</button>
                <button>Завершені</button>
                <button>Чернетки</button>
            </div>
            <div>
                <button className="btn-primary">Створити новий проєкт</button>
            </div>
        </div>
    )
}