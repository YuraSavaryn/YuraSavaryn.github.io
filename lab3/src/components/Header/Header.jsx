import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className="container">
            <div className="main-logo">
                <img src="https://images.vexels.com/media/users/3/137684/isolated/preview/4205608f4b2ad81262e9328efbe9d2ab-geometric-cube-abstract-logo.png"/>
                <Link to="/">HACK YOUR LIFE</Link>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMenu}>☰</button>
            <nav className={menuActive ? 'active' : ''}>
                <ul className="main-menu">
                    <li><Link to="/competitions">Змагання</Link></li>
                    <li><Link to="/projects">Мої проєкти</Link></li>
                    <li><Link to="/rating">Рейтинг</Link></li>
                </ul>
            </nav>
            <div className="auth">
                <button>Увійти</button>
                <button>Зареєструватися</button>
            </div>
        </header>
    )
}