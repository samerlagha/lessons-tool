import { arrDaysOfWeek } from './current_week.js';



export const renderTitleDate = (startdate, enddate) => {
    const placeForDateTitle = document.querySelector('.nav__dateMonEar-today');
    let firstDayOfWeek = new Date(startdate);
    let firstDayMonth = firstDayOfWeek.toDateString().split(' ')[1];
    let firstDayYear = firstDayOfWeek.getFullYear();

    let lastDayOfWeek = new Date(enddate);
    let lastDayMonth = lastDayOfWeek.toDateString().split(' ')[1];
    let lastDayYear = lastDayOfWeek.getFullYear();

    if (firstDayMonth === lastDayMonth && firstDayYear === lastDayYear) {
        placeForDateTitle.innerHTML = `${firstDayMonth} ${firstDayYear}`;
    }
    if (firstDayMonth !== lastDayMonth && firstDayYear === lastDayYear) {
        placeForDateTitle.innerHTML = `${firstDayMonth} - ${lastDayMonth.toLocaleLowerCase()} ${firstDayYear}`;
    }
    if (firstDayMonth !== lastDayMonth && firstDayYear !== lastDayYear) {
        placeForDateTitle.innerHTML = `${firstDayMonth} ${firstDayYear} - ${lastDayMonth} ${lastDayYear}`;
    }
};

renderTitleDate(arrDaysOfWeek[0], arrDaysOfWeek[6]);