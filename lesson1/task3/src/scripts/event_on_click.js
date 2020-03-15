import { arrDaysOfWeek } from './current_week.js';
import { onClickValidate, onMakeObjectFromValuesInForm } from './validate.js';

const fieldOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const saveBtn = document.querySelector('.event__btn-save');

export const onClickOnPlaceInField = event => {
    const clickedHour = event.target;
    if(!clickedHour.classList.contains('main__sidebar_days_hours')) return;

    const hourNumber = +clickedHour.dataset.hourNumber;
    const dayNumber = clickedHour.closest('.main__sidebar_days_line').dataset.dayNumber;
    const currentYear = arrDaysOfWeek[dayNumber].getFullYear();
    const currentMonth = arrDaysOfWeek[dayNumber].getMonth();
    const currentDate = arrDaysOfWeek[dayNumber].getDate();

    const startTime = new Date(Date.UTC(currentYear, currentMonth, currentDate, hourNumber));
    popupBlock.style.display = 'block';
    saveBtn.style.display = 'block';
     
    const myDate = document.querySelectorAll('.specialDate');
    [...myDate].forEach(elem => elem.value = new Date(startTime)
        .toISOString().substr(0, 10));

    const startHour = new Date(currentYear, currentMonth, currentDate, hourNumber).getHours();
    const endHour = startHour + 1;

    const startTimePlace = document.querySelector('.startTime_place');
    startHour < 10 
    ? startTimePlace.value = [`0${startHour}`, '00'].join(':')
    : startTimePlace.value = [`${startHour}`, '00'].join(':');
    
    const endTimePlace = document.querySelector('.endTime_place');
    endHour < 10 
    ? endTimePlace.value = [`0${endHour}`, '00'].join(':')
    : endTimePlace.value = [`${endHour}`, '00'].join(':');
    if(startHour === 23){
        [...myDate][1].value = new Date(startTime.setDate(startTime.getDate()+1))
            .toISOString().substr(0, 10);
        endTimePlace.value = [`00`, '00'].join(':');
    }

    const headerInput = document.querySelector('.event__name');
    headerInput.value = '';

    const descriptionInput = document.querySelector('.multiline__text');
    descriptionInput.value = '';

    const defaultBackgroundColor = document.querySelector('.pick_color');
    defaultBackgroundColor.value = '#0851f6';

    fieldOfDays.removeEventListener('click', onClickOnPlaceInField);

    let tempObj = onMakeObjectFromValuesInForm();
    onClickValidate(tempObj);
};
fieldOfDays.addEventListener('click', onClickOnPlaceInField);