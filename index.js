const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const days = document.querySelector('.days');
let date = new Date();
let currentDay = date.getDay();

for (let i = 0; i < week.length; i++) {
    let daysList = document.createElement('div');
    
    if (i === currentDay) {
        daysList.innerHTML = `<strong>${week[i]}</strong>`;
    } else if (week[i] === "Суббота" || week[i] === "Воскресенье") {
        daysList.innerHTML = `<i>${week[i]}</i>`; 
    } else {
        daysList.innerText = week[i];
    }

    days.appendChild(daysList);
}

