export default function HackathonCard({ hackathon, joinedCards, joinHackathon }) {
    return (
        <div 
            className={`hackathon-card ${joinedCards[hackathon.id] ? 'joined' : ''}`}
        >
            <div className={`hackathon-img ${hackathon.image}`}>
                <div className={`hackathon-status ${hackathon.status}`}>
                    {hackathon.statusText}
                </div>
            </div>
            <div className="hackathon-content">
                <h3>{hackathon.title}</h3>
                <p>{hackathon.description}</p>
                <div className="hackathon-meta">
                    <span>
                        {hackathon.status === "active" 
                            ? (hackathon.timeLeft || `⏰ Залишилося ${hackathon.daysLeft} днів`)
                            : `📅 Початок через ${hackathon.daysToStart} днів`
                        }
                    </span>
                    <span>👥 {hackathon.participants} учасників</span>
                </div>
                <div className="hackathon-btn">
                    <button 
                        onClick={() => hackathon.status !== "completed" && !hackathon.joined && joinHackathon(hackathon.id)}
                        className={hackathon.joined ? "active" : ""}
                        style={
                            hackathon.status === "completed" 
                                ? { backgroundColor: '#9e9e9e', cursor: 'default' } 
                                : hackathon.joined 
                                    ? { backgroundColor: '#4caf50', cursor: 'default' } 
                                    : {}
                        }
                        disabled={hackathon.status === "completed" || hackathon.joined}
                    >
                        {hackathon.status === "completed" 
                            ? "Змагання завершено" 
                            : hackathon.joined 
                                ? "Ви берете участь" 
                                : "Приєднатись до змагання"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}