export default function RatingStatsSection() {
    return (
        <div className="rating rating-stats">
            <div className="stat-item">
                <div className="stat-icon">👑</div>
                <div className="stat-content">
                    <h4>Лідер рейтингу</h4>
                    <p className="stat-name">Олексій Петренко</p>
                    <p>Переможець 8 хакатонів</p>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                    <h4>Всього змагань</h4>
                    <p className="stat-number">136</p>
                    <p>Проведено за цей рік</p>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-icon">👨‍💻</div>
                <div className="stat-content">
                    <h4>Учасників</h4>
                    <p className="stat-number">7,834</p>
                    <p>Зареєстровано на платформі</p>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                    <h4>Ваш рейтинг</h4>
                    <p className="stat-number">236</p>
                    <p>із 7,834 учасників</p>
                </div>
            </div>
        </div>
    )
}