import { currentWeek } from './render-current-week.js';
import { createPopup } from './create-popup.js';


export { renderCalendar };
 
const calendar = document.querySelector('.calendar');
//render calendar
const renderCalendar = () => {
    calendar.innerHTML = '';
    const week = document.createElement('div');
    week.classList.add('calendar__week-bar');
    calendar.append(week);
    
    for (let i = 1; i <= 7; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar__day-bar');
        day.setAttribute('data-day', i - 1);
        week.append(day);
        
        for (let j = 1; j <= 24; j++) {
            const hour = document.createElement('div');
            hour.classList.add('calendar__hour-bar');
            hour.setAttribute('data-day', i - 1);
            hour.setAttribute('data-hour', j - 1);
            hour.setAttribute('data-date', currentWeek[i - 1]);

            day.append(hour);
        }
    }
    week.addEventListener('click', createPopup);

}