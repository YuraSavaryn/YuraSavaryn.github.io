export default function StorySection() {
    return (
        <section className="success-stories">
            <div className="section-title">
                <h2>Історії успіху</h2>
                <p>Дізнайтеся, як наші учасники перетворили свої ідеї на успішні стартапи</p>
            </div>
            <div className="stories-slider">
                <div className="story-card">
                    <div className="story-image">
                        <img src="https://www.philips.com/c-dam/corporate/en_AA/about/about-us/executive-commitee/roy-jakobs-ceo-cardview.jpg" alt="Фото учасника" />
                    </div>
                    <div className="story-content">
                        <h3>Від хакатону до великої компанії</h3>
                        <p className="story-author">Олександр Петренко, CEO EcoTech</p>
                        <p className="story-text">"Наш проєкт з переробки пластику почався як ідея на хакатоні HackYourLife 2023. Сьогодні ми маємо інвестиції на $2 млн та команду з 15 розробників. Це доводить, що хороші ідеї народжуються на хакатонах!"</p>
                    </div>
                </div>
            </div>
            <div className="slider-controls">
                <button className="slider-prev">❮</button>
                <button className="slider-next">❯</button>
            </div>
        </section>
    )
}