import { data } from './data';

export default function RatingSection() {
    const getRowClass = (position) => {
        if (position === 1) return 'first-place';
        if (position === 2) return 'second-place';
        if (position === 3) return 'third-place';
        return '';
    };

    const getTrendContent = (trend) => {
        if (trend.direction === 'up') {
            return <span className="trend-up">↑ {trend.value}</span>;
        } else if (trend.direction === 'down') {
            return <span className="trend-down">↓ {trend.value}</span>;
        } else {
            return <span className="trend-same">−</span>;
        }
    };

    return (
        <section className="rating">
            <div className="rating-table-container">
                <table className="rating-table">
                    <thead>
                        <tr>
                            <th className="position-col">Місце</th>
                            <th className="participant-col">Учасник</th>
                            <th className="total-score-col">Загальний бал</th>
                            <th className="victories-col">Перемоги</th>
                            <th className="participations-col">Участь</th>
                            <th className="activity-col">Активність</th>
                            <th className="trend-col">Тренд</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(participant => (
                            <tr key={participant.position} className={getRowClass(participant.position)}>
                                <td className="position-col">{participant.position}</td>
                                <td className="participant-col">
                                    <div className="participant-info">
                                        <div className="participant-avatar">{participant.initials}</div>
                                        <div className="participant-details">
                                            <p className="participant-name">{participant.name}</p>
                                            <p className="participant-team">{participant.team}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="total-score-col">{participant.totalScore}</td>
                                <td className="victories-col">{participant.victories}</td>
                                <td className="participations-col">{participant.participations}</td>
                                <td className="activity-col">
                                    <div className="activity-bar">
                                        <div className="activity-progress" style={{ width: `${participant.activity}%` }}></div>
                                    </div>
                                </td>
                                <td className="trend-col">{getTrendContent(participant.trend)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn">4</button>
                <button className="pagination-btn">5</button>
                <span>...</span>
                <button className="pagination-btn">78</button>
                <button className="pagination-btn next">Наступна →</button>
            </div>
        </section>
    );
}