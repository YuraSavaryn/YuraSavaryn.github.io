export default function CompetitionsRulesSection() {
    return (
        <div className="competition-rules">
            <h2>Загальні правила участі</h2>
            <div className="rules-container">
                <div className="rule-item">
                    <div className="rule-icon">📝</div>
                    <div className="rule-content">
                        <h4>Реєстрація</h4>
                        <p>Реєстрація команди повинна бути завершена не пізніше, ніж за 24 години до початку змагання. Всі члени команди повинні мати підтверджені акаунти.</p>
                    </div>
                </div>
                <div className="rule-item">
                    <div className="rule-icon">⏱️</div>
                    <div className="rule-content">
                        <h4>Дедлайни</h4>
                        <p>Проєкти повинні бути подані до кінцевого терміну. Жодні подання після дедлайну не приймаються, незалежно від причини.</p>
                    </div>
                </div>
                <div className="rule-item">
                    <div className="rule-icon">💻</div>
                    <div className="rule-content">
                        <h4>Оригінальність</h4>
                        <p>Всі представлені проєкти повинні бути оригінальними роботами, створеними під час змагання. Використання готових шаблонів дозволено, але вони повинні бути суттєво модифіковані.</p>
                    </div>
                </div>
                <div className="rule-item">
                    <div className="rule-icon">🔍</div>
                    <div className="rule-content">
                        <h4>Оцінювання</h4>
                        <p>Проєкти оцінюються за критеріями: інноваційність (30%), технічна складність (30%), дизайн та UX (20%), презентація (20%).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}