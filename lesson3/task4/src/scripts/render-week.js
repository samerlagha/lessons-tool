import { currentWeek } from './render-current-week.js';

export { createDaysOfWeek };
//создать день недели
function createDaysOfWeek(week){
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = '';

    const gmtBlock = document.createElement('div');
    gmtBlock.textContent = 'GMT+02';
    gmtBlock.classList.add('gmt');
    daysContainer.append(gmtBlock);

    for (let i = 0; i < week.length; i++){
     const oneDay = document.createElement('div');
        oneDay.classList.add('day');
        
        const dayName = document.createElement('span');
        dayName.classList.add('day-name');
        dayName.textContent = week[i].toDateString().split(' ')[0];
        oneDay.append(dayName);

        const dayDate = document.createElement('div');
        dayDate.classList.add('day-date');
        dayDate.textContent = week[i].getDate();
        oneDay.append(dayDate);

        if (week[i].toDateString() == new Date().toDateString()) {
            dayDate.classList.add('day-date_current');
        }
        
        daysContainer.append(oneDay);
    }
};