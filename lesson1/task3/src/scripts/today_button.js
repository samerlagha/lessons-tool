const todayButton = document.querySelector('.nav_day');
import { setItem, getItem } from './storage.js';
import { generateArrDaysOfWeek } from './current_week.js';
import { arrDaysOfWeek } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';
import { renderEventObject } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';

export const todayButtonFunc = () => {   
    const arr = generateArrDaysOfWeek();
    renderCurrentWeek(arr);
    renderEventObject();
    renderRedLIne();
    renderTitleDate(arrDaysOfWeek[0], arrDaysOfWeek[6]);
};
todayButton.addEventListener('click', todayButtonFunc);