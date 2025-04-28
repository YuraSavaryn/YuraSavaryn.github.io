export default function ProjectStatsSection() {
    return (
        <div className="project-stats">
            <h2>Статистика проєктів</h2>
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-content">
                        <h4>Участь у хакатонах</h4>
                        <p className="stat-number">12</p>
                        <p>Ви брали участь у 12 хакатонах за останній рік</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">🥇</div>
                    <div className="stat-content">
                        <h4>Призові місця</h4>
                        <p className="stat-number">3</p>
                        <p>Ви здобули 3 призові місця (1 перше, 2 другі)</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">📊</div>
                    <div className="stat-content">
                        <h4>Рейтинг</h4>
                        <p className="stat-number">236</p>
                        <p>Ваш поточний рейтинг серед усіх учасників</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">⏱️</div>
                    <div className="stat-content">
                        <h4>Годин роботи</h4>
                        <p className="stat-number">347</p>
                        <p>Загальна кількість годин, витрачених на проєкти</p>
                    </div>
                </div>
            </div>
        </div>
    )
}