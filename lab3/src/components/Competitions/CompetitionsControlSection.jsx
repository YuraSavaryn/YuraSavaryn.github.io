import { useState } from 'react';

export default function CompetitionsControlSection({ onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('Всі категорії');

    const categories = [
        'Всі категорії',
        'Штучний інтелект',
        'Веб-розробка',
        'Кібербезпека',
        'Блокчейн',
        'Розробка ігор'
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className="competitions-control">
            <div className="category-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}