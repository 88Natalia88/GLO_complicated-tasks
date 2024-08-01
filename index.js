const date1 = document.querySelector('.date');
const date2 = document.querySelector('.date1');

function declensionHours(hours) {
    hours %= 100;
    if (hours >= 11 && hours <= 19) {
        return 'часов'; 
    }
    switch (hours % 10) {
        case 1: return 'час';  
        case 2: return 'часа'; 
        default: return 'часов'; 
    }
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function updateDateTime() {
    const date = new Date();
    const daysArr = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    const day = daysArr[date.getDay()];
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // Формат A
    const declHour = declensionHours(hour);
    date1.innerHTML = 'Сегодня ' + day + ', ' + date.getDate() + ' ' + month + ' ' + year + ' год, ' + hour + ' ' + declHour + ' ' + minute + ' минут ' + second + ' секунд';

    // Формат Б
    date2.innerHTML = `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${year} - ${pad(hour)}:${pad(minute)}:${pad(second)}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
