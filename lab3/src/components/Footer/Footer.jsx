import "./Footer.css"

export default function Footer() {
    return (
        <footer className="container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>HackYourLife</h3>
                    <ul>
                        <li><a href="#">Про нас</a></li>
                        <li><a href="#">Партнери</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                </div>
                
                <div className="footer-column">
                    <h3>Спільнота</h3>
                    <ul>
                        <li><a href="#">Рейтинг</a></li>
                        <li><a href="#">Форум</a></li>
                        <li><a href="#">Успішні проєкти</a></li>
                        <li><a href="#">Вакансії</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Приєднуйтесь</h3>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Discord</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Контактна інфомарція</h3>
                    <ul>
                        <li>Телефон</li>
                        <li>+380980673457</li>
                        <li>Пошта</li>
                        <li>hacklife@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 HackYourLife. Усі права захищені.</p>
            </div>
        </footer>
    )
}