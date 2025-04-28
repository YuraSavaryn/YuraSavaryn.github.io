export default function PartnersSection() {
    return (
        <section className="partners-section">
            <div className="section-title">
                <h2>Наші партнери</h2>
                <p>Компанії, що підтримують інновації та творчість</p>
            </div>
            <div className="partners-grid">
                <div className="partner-logo">
                    <img src="https://www.alphabetcreative.com/wp-content/uploads/2023/04/mcdonalds-1024x863.jpg" alt="Company 1" />
                </div>
                <div className="partner-logo">
                    <img src="https://logomak.com/blog/wp-content/uploads/2023/09/Apple-Logo-500x281-min.png" alt="Company 2" />
                </div>
                <div className="partner-logo">
                    <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/starbucks-logo.png" alt="Company 3" />
                </div>
                <div className="partner-logo">
                    <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png" alt="Company 4" />
                </div>
                <div className="partner-logo">
                    <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/HP.png" alt="Company 5" />
                </div>
            </div>
            <div className="become-partner">
                <p>Хочете стати нашим партнером?</p>
                <button className="btn-primary">Зв'язатися з нами</button>
            </div>
        </section>
    )
}