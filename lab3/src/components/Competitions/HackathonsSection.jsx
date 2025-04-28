import { useState, useEffect, useRef } from 'react';
import HackathonCard from './HackathonCard';
import { data } from './data';

export default function HackathonsSection({ selectedCategory }) {
    const [hackathons, setHackathons] = useState(data);
    const [joinedCards, setJoinedCards] = useState({});
    const timerIntervalsRef = useRef({});

    useEffect(() => {
        setHackathons(prevHackathons => {
            return prevHackathons.map(hackathon => {
                if (hackathon.status === "active") {
                    const endDate = new Date();
                    endDate.setDate(endDate.getDate() + hackathon.daysLeft);
                    endDate.setHours(Math.floor(Math.random() * 24));
                    endDate.setMinutes(Math.floor(Math.random() * 60));
                    endDate.setSeconds(0);
                    
                    return {
                        ...hackathon,
                        endDate: endDate
                    };
                }
                return hackathon;
            });
        });
    }, []);

    useEffect(() => {
        hackathons.forEach(hackathon => {
            if (hackathon.status === "active" && hackathon.endDate) {
                startTimer(hackathon.id);
            }
        });

        return () => {
            Object.values(timerIntervalsRef.current).forEach(interval => {
                clearInterval(interval);
            });
        };
    }, [hackathons]);

    const formatTime = (days, hours, minutes, seconds) => {
        let timeText = '';
        
        if (days > 0) {
            timeText += `${days} дн. `;
        }
        
        timeText += `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        return timeText;
    };

    const startTimer = (hackathonId) => {
        const hackathon = hackathons.find(h => h.id === hackathonId);
        if (!hackathon || !hackathon.endDate) return;

        if (timerIntervalsRef.current[hackathonId]) {
            clearInterval(timerIntervalsRef.current[hackathonId]);
        }

        timerIntervalsRef.current[hackathonId] = setInterval(() => {
            const now = new Date().getTime();
            const distance = hackathon.endDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(timerIntervalsRef.current[hackathonId]);
                delete timerIntervalsRef.current[hackathonId];

                setHackathons(prevHackathons => {
                    return prevHackathons.map(h => {
                        if (h.id === hackathonId) {
                            return {
                                ...h,
                                status: "completed",
                                statusText: "Завершений",
                                timeLeft: "⏰ Час вийшов!"
                            };
                        }
                        return h;
                    });
                });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const timeText = formatTime(days, hours, minutes, seconds);

                setHackathons(prevHackathons => {
                    return prevHackathons.map(h => {
                        if (h.id === hackathonId) {
                            return {
                                ...h,
                                timeLeft: `⏰ Залишилося ${timeText}`
                            };
                        }
                        return h;
                    });
                });
            }
        }, 1000);
    };

    const joinHackathon = (hackathonId) => {
        setHackathons(prevHackathons => {
            return prevHackathons.map(hackathon => {
                if (hackathon.id === hackathonId && !hackathon.joined) {
                    return {
                        ...hackathon,
                        participants: hackathon.participants + 1,
                        joined: true
                    };
                }
                return hackathon;
            });
        });

        setJoinedCards({
            ...joinedCards,
            [hackathonId]: true
        });

        setTimeout(() => {
            setJoinedCards(prevJoinedCards => {
                const newJoinedCards = { ...prevJoinedCards };
                delete newJoinedCards[hackathonId];
                return newJoinedCards;
            });
        }, 1000);
    };

    const filteredHackathons = hackathons.filter(hackathon => 
        selectedCategory === 'Всі категорії' || hackathon.category === selectedCategory
    );

    return (
        <section className="features">
            <div className="features-grid">
                {filteredHackathons.length > 0 ? (
                    filteredHackathons.map(hackathon => (
                        <HackathonCard 
                            key={hackathon.id} 
                            hackathon={hackathon}
                            joinedCards={joinedCards}
                            joinHackathon={joinHackathon}
                        />
                    ))
                ) : (
                    <p className="no-hackathons">Змагань за обраною категорією не знайдено.</p>
                )}
            </div>
        </section>
    );
}