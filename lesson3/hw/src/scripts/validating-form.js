import { setItemToStorage, getItemFromStorage } from './storage.js';
import { popupForm, saveButton, closePopup } from './create-popup.js';
import { editSaveHandler } from './save-event.js';


 export { durationValidation };
//Проверка продолжительности
function durationValidation(event) {
    event.preventDefault();
    const formData = new FormData(popupForm);

    const timeFrom = +formData.get('timeFrom').split(':').join('');
    const timeTo = +formData.get('timeTo').split(':').join('');

    if (timeTo - timeFrom > 600) {
        alert('Exceeded duration limit!');
        closePopup();
    } else {
        editSaveHandler(event);
    }
}

//проверка до начала события

function validationBeforeEventStarts(event) {
    event.preventDefault();

    const currentDate = new Date();

    const formData = new FormData(popupForm);
    const dateOfEvent = new Date(formData.get('dateFrom'));
    const hoursOfEvent = formData.get('timeFrom').split(':');
    dateOfEvent.setHours(hoursOfEvent[0], hoursOfEvent[1]);

    const mins = 15*60*1000;

    if (dateOfEvent.getDate() == currentDate.getDate()) {
        dateOfEvent.getTime() - currentDate.getTime() > mins ?
            alert('Forbidden! The event is too soon.') :
            editSaveHandler(event);
    }
}