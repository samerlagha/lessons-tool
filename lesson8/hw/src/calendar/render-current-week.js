import { createDaysOfWeek } from './render-week.js';
import { renderCalendar } from './render-calendar.js';
import { renderEvents } from './render-events.js';


export { 
    currentWeek,
    displayCurrentWeek,
    switchWeekForward,
    switchWeekBackward,
    displayMonth
};

const currentWeek = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date()
];
//render left &rigth & block monthYear
const forwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-right');
const backwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-left');
const monthAndYear = document.querySelector('.header__current-month-year');

//показать текущую неделю
const displayCurrentWeek = (week) => {
    const currentDate = new Date().getDate();
    const currentDay = new Date().getDay();
    let counterPrev = currentDay;
    let counterNext = 1;
    for (let i = 0; i < week.length; i++) {

        if (i < currentDay) {
            let date = currentDate - counterPrev;
            week[i] = new Date(new Date().setDate(date));
            counterPrev--;
        } else if (i == currentDay) {
            week[i] = new Date();
        } else {
            let date = currentDate + counterNext;
            week[i] = new Date(new Date().setDate(date));
            counterNext++;
        }
    }
    displayMonth(currentWeek);
    createDaysOfWeek(currentWeek);
    renderCalendar();
    renderEvents();  
};

displayCurrentWeek(currentWeek);

const todayBtn = document.querySelector('.header__button_today');
const todayWeekSwitcher = () => {
    displayCurrentWeek(currentWeek);
    renderCalendar();
    renderEvents();
};
const switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher);//переключить сегодняшнюю неделю




function forwardSwitcher(currentWeek) {
    let newWeek = [...currentWeek];

    newWeek.map(dateOfDay => {
        const newDate = dateOfDay.getDate();

        dateOfDay = new Date(dateOfDay.setDate(newDate + 7));
    });
    displayMonth(currentWeek);
    createDaysOfWeek(currentWeek);
    renderCalendar();
    renderEvents();
};
const switchWeekForward = forwardSwitcherBtn.addEventListener('click', forwardSwitcher.bind(forwardSwitcherBtn, currentWeek));



const backwardSwitcher = (currentWeek) => {
    let newWeek = [...currentWeek];

    newWeek.map(dateOfDay => {
        const newDate = dateOfDay.getDate();

        dateOfDay = new Date(dateOfDay.setDate(newDate - 7));
    });
    displayMonth(currentWeek);
    createDaysOfWeek(currentWeek);
    renderCalendar();
    renderEvents();
};
const switchWeekBackward = backwardSwitcherBtn.addEventListener('click', backwardSwitcher.bind(backwardSwitcherBtn, currentWeek));



function displayMonth(week) {
    let arrMonth = [];
    let arrYear = [];
    let result;
    for (let i = 0; i < week.length; i++) {

        let month = week[i].toDateString().split(' ')[1];
        let year = week[i].toDateString().split(' ')[3];

        if (arrMonth.indexOf(month) == -1) {
            arrMonth.push(month);
        };
        if (arrYear.indexOf(year) == -1) {
            arrYear.push(year);
        }
    }
    if (arrMonth.length == 1) {
        result = `${arrMonth[0]} ${arrYear[0]}`;
    }
    if (arrMonth.length == 2) {
        result = `${arrMonth[0]} - ${arrMonth[1]} ${arrYear[0]}`;
    }
    if (arrYear.length == 2) {
        result = `${arrMonth[0]} ${arrYear[0]} - ${arrMonth[1]} ${arrYear[1]}`;
    }
    monthAndYear.innerHTML = result;
}