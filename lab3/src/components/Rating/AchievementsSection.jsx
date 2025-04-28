export default function AchievementsSection() {
    return (
        <section className="rating-achievements">
            <h2>Ваші досягнення</h2>
            <div className="achievements-container">
                <div className="achievement-card">
                    <div className="achievement-icon">🥇</div>
                    <h3>Перше місце</h3>
                    <p>Хакатон AI Solutions 2024</p>
                </div>
                <div className="achievement-card">
                    <div className="achievement-icon">🥈</div>
                    <h3>Друге місце</h3>
                    <p>Web Dev Challenge 2024</p>
                </div>
                <div className="achievement-card">
                    <div className="achievement-icon">🥈</div>
                    <h3>Друге місце</h3>
                    <p>GameDev Challenge 2024</p>
                </div>
                <div className="achievement-card">
                    <div className="achievement-icon">🏆</div>
                    <h3>Лідер за балами</h3>
                    <p>Лютий 2025</p>
                </div>
                <div className="achievement-card locked">
                    <div className="achievement-icon">⭐</div>
                    <h3>Топ-100 розробників</h3>
                    <p>Потрібно досягти топ-100</p>
                </div>
                <div className="achievement-card locked">
                    <div className="achievement-icon">🔥</div>
                    <h3>10 перемог</h3>
                    <p>Виграйте 10 хакатонів</p>
                </div>
            </div>
        </section>
    )
}