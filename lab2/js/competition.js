document.addEventListener('DOMContentLoaded', function() {
    const participateButtons = document.querySelectorAll('.hackathon-btn button');
    
    participateButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                return; 
            }
            
            const cardElement = this.closest('.hackathon-card');
            const participantsElement = cardElement.querySelector('.hackathon-meta span:nth-child(2)');
            
            const participantsText = participantsElement.textContent;
            const participantsCount = parseInt(participantsText.match(/\d+/)[0]);
            
            const newCount = participantsCount + 1;
            
            participantsElement.textContent = participantsText.replace(
                participantsCount, 
                newCount
            );
            
            this.style.backgroundColor = '#4caf50'; 
            this.textContent = 'Ви берете участь';
            this.classList.add('active');
            
            cardElement.classList.add('joined');
            setTimeout(() => {
                cardElement.classList.remove('joined');
            }, 1000);
        });
    });
    
    const style = document.createElement('style');
    style.textContent = `
        .hackathon-card.joined {
            box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
        }
        .hackathon-btn button.active {
            cursor: default;
        }
    `;
    document.head.appendChild(style);

    const activeHackathons = document.querySelectorAll('.hackathon-card .hackathon-status.active');
    
    // Для кожного активного хакатону налаштовуємо таймер
    activeHackathons.forEach(status => {
        const card = status.closest('.hackathon-card');
        const timeElement = card.querySelector('.hackathon-meta span:first-child');
        
        // Парсимо поточний текст для отримання кількості днів
        const daysTextMatch = timeElement.textContent.match(/(\d+)/);
        if (!daysTextMatch) return;
        
        // Отримуємо кількість днів до завершення
        const remainingDays = parseInt(daysTextMatch[1]);
        
        // Створюємо дату завершення (поточна дата + залишок днів + випадкові години і хвилини)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + remainingDays);
        endDate.setHours(Math.floor(Math.random() * 24)); // Випадкова година для різних хакатонів
        endDate.setMinutes(Math.floor(Math.random() * 60)); // Випадкові хвилини
        endDate.setSeconds(0);
        
        // Створюємо таймер, який оновлюється кожної секунди
        const countdownInterval = setInterval(function() {
            // Отримуємо поточний час
            const now = new Date().getTime();
            
            // Знаходимо різницю між поточним часом і часом завершення
            const distance = endDate.getTime() - now;
            
            // Розраховуємо дні, години, хвилини і секунди
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Оновлюємо текст з часом, що залишився
            if (distance > 0) {
                // Створюємо форматований текст для таймера
                let timerText = '';
                
                if (days > 0) {
                    timerText += `${days} дн. `;
                }
                
                timerText += `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                // Оновлюємо текст в елементі
                timeElement.innerHTML = `⏰ Залишилося ${timerText}`;
            } else {
                // Якщо час вийшов, змінюємо статус і очищаємо інтервал
                clearInterval(countdownInterval);
                timeElement.innerHTML = '⏰ Час вийшов!';
                
                // Змінюємо статус хакатону на "Завершений"
                status.textContent = 'Завершений';
                status.classList.remove('active');
                status.classList.add('completed');
                
                // Додаємо стиль для завершених хакатонів
                status.style.backgroundColor = '#9e9e9e';
                
                // Деактивуємо кнопку
                const button = card.querySelector('.hackathon-btn button');
                button.disabled = true;
                button.textContent = 'Змагання завершено';
                button.style.backgroundColor = '#9e9e9e';
            }
        }, 1000); // Оновлюємо кожну секунду
    });
});