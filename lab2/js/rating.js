document.addEventListener('DOMContentLoaded', function() {
    const participants = [
        {
            position: 1,
            name: "Олексій Петренко",
            team: "Team Innovators",
            initials: "ОП",
            totalScore: 6847,
            victories: 8,
            participations: 21,
            activity: 95,
            trend: { direction: "up", value: 2 }
        },
        {
            position: 2,
            name: "Марія Коваленко",
            team: "ByteBenders",
            initials: "МК",
            totalScore: 6534,
            victories: 7,
            participations: 19,
            activity: 90,
            trend: { direction: "down", value: 1 }
        },
        {
            position: 3,
            name: "Василь Сидоренко",
            team: "Code Warriors",
            initials: "ВС",
            totalScore: 6229,
            victories: 6,
            participations: 22,
            activity: 85,
            trend: { direction: "up", value: 3 }
        },
        {
            position: 4,
            name: "Ірина Заєць",
            team: "DevDreamers",
            initials: "ІЗ",
            totalScore: 5934,
            victories: 5,
            participations: 20,
            activity: 80,
            trend: { direction: "same", value: 0 }
        },
        {
            position: 5,
            name: "Олег Мельник",
            team: "TechTitans",
            initials: "ОМ",
            totalScore: 5742,
            victories: 5,
            participations: 18,
            activity: 78,
            trend: { direction: "up", value: 1 }
        },
        {
            position: 6,
            name: "Тарас Ковальчук",
            team: "Binary Beasts",
            initials: "ТК",
            totalScore: 5589,
            victories: 4,
            participations: 17,
            activity: 75,
            trend: { direction: "down", value: 2 }
        },
        {
            position: 7,
            name: "Катерина Троценко",
            team: "WebWizards",
            initials: "КТ",
            totalScore: 5382,
            victories: 4,
            participations: 16,
            activity: 72,
            trend: { direction: "up", value: 5 }
        },
        {
            position: 8,
            name: "Дмитро Петров",
            team: "HackMasters",
            initials: "ДП",
            totalScore: 5271,
            victories: 3,
            participations: 20,
            activity: 70,
            trend: { direction: "down", value: 1 }
        },
        {
            position: 9,
            name: "Аліна Приходько",
            team: "CodeCrafters",
            initials: "АП",
            totalScore: 5169,
            victories: 3,
            participations: 15,
            activity: 68,
            trend: { direction: "same", value: 0 }
        },
        {
            position: 10,
            name: "Роман Мельник",
            team: "DataDragons",
            initials: "РМ",
            totalScore: 5043,
            victories: 3,
            participations: 14,
            activity: 65,
            trend: { direction: "up", value: 2 }
        }
    ];

    const tableBody = document.querySelector('.rating-table tbody');
    
    tableBody.innerHTML = '';
    
    participants.forEach(participant => {
        let rowClass = '';
        if (participant.position === 1) {
            rowClass = 'first-place';
        } else if (participant.position === 2) {
            rowClass = 'second-place';
        } else if (participant.position === 3) {
            rowClass = 'third-place';
        }
        
        const trendIcon = participant.trend.direction === 'up' 
            ? `<span class="trend-up">↑ ${participant.trend.value}</span>` 
            : participant.trend.direction === 'down' 
                ? `<span class="trend-down">↓ ${participant.trend.value}</span>` 
                : `<span class="trend-same">−</span>`;
        
        const rowHTML = `
            <tr class="${rowClass}">
                <td class="position-col">${participant.position}</td>
                <td class="participant-col">
                    <div class="participant-info">
                        <div class="participant-avatar">${participant.initials}</div>
                        <div class="participant-details">
                            <p class="participant-name">${participant.name}</p>
                            <p class="participant-team">${participant.team}</p>
                        </div>
                    </div>
                </td>
                <td class="total-score-col">${participant.totalScore}</td>
                <td class="victories-col">${participant.victories}</td>
                <td class="participations-col">${participant.participations}</td>
                <td class="activity-col">
                    <div class="activity-bar">
                        <div class="activity-progress" style="width: ${participant.activity}%;"></div>
                    </div>
                </td>
                <td class="trend-col">${trendIcon}</td>
            </tr>
        `;
        
        tableBody.innerHTML += rowHTML;
    });
});