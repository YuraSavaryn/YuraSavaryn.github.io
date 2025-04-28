export default function RatingControlSection() {
    return (
        <div className="rating-control">
            <div className="rating-filter">
                <button className="active">Загальний рейтинг</button>
                <button>За кількістю перемог</button>
                <button>За активністю</button>
                <button>Цьогорічні лідери</button>
            </div>
            <div className="rating-search">
                <input type="text" placeholder="Пошук учасника..." />
                <button>Знайти</button>
            </div>
        </div>
    )
}