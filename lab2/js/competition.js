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
    
    activeHackathons.forEach(status => {
        const card = status.closest('.hackathon-card');
        const timeElement = card.querySelector('.hackathon-meta span:first-child');
        
        const daysTextMatch = timeElement.textContent.match(/(\d+)/);
        if (!daysTextMatch) return;
        
        const remainingDays = parseInt(daysTextMatch[1]);
        
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + remainingDays);
        endDate.setHours(Math.floor(Math.random() * 24)); 
        endDate.setMinutes(Math.floor(Math.random() * 60)); 
        endDate.setSeconds(0);
        
        const countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            
            const distance = endDate.getTime() - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if (distance > 0) {
                let timerText = '';
                
                if (days > 0) {
                    timerText += `${days} дн. `;
                }
                
                timerText += `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                timeElement.innerHTML = `⏰ Залишилося ${timerText}`;
            } else {
                clearInterval(countdownInterval);
                timeElement.innerHTML = '⏰ Час вийшов!';
                
                status.textContent = 'Завершений';
                status.classList.remove('active');
                status.classList.add('completed');
                
                status.style.backgroundColor = '#9e9e9e';
                
                const button = card.querySelector('.hackathon-btn button');
                button.disabled = true;
                button.textContent = 'Змагання завершено';
                button.style.backgroundColor = '#9e9e9e';
            }
        }, 1000);
    });
});