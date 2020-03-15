import { onClickOnPlaceInField } from './event_on_click.js';
import { onClickValidate, onMakeObjectFromValuesInForm } from './validate.js';
const createButton = document.querySelector('.nav__button');
const popupBlock = document.querySelector('.popup-layer');
const fieldOfDays = document.querySelector('.main__sidebar_days');


export const onCreateButton = () => {
    const startHour = new Date().getHours();
    const endHour = startHour + 1;
   
    document.querySelector('.startTime_place')
        .value = [startHour, '00'].join(':');
    
    document.querySelector('.endTime_place')
        .value = [endHour, '00'].join(':');

    popupBlock.style.display = 'block';

    const myDate = document.querySelectorAll('.specialDate');
    [...myDate].forEach(elem => 
        elem.value = new Date().toISOString().substr(0, 10));

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
createButton.addEventListener('click', onCreateButton);