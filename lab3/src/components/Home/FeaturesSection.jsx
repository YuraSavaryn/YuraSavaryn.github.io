export default function FeaturesSection() {
    return (
        <section className="features">
            <div className="section-title">
                <h2>Наші переваги</h2>
                <p>Чому тисячі розробників обирають саме нашу платформу</p>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h3>Різноманітні змагання</h3>
                    <p>Від коротких задач до повноцінних хакатонів з різних галузей програмування та технологій.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">👥</div>
                    <h3>Командна робота</h3>
                    <p>Формуйте команди з розробників зі всього світу або приєднуйтесь до існуючих.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Рейтингова система</h3>
                    <p>Змагайтесь за місця в глобальному рейтингу та отримуйте визнання спільноти.</p>
                </div>
            </div>
        </section>
    )
}