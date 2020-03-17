import "core-js/modules/es.array.join";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { setItemToStorage, getItemFromStorage } from './storage.js';
import { popupForm, saveButton, closePopup } from './create-popup.js';
import { editSaveHandler } from './save-event.js';
export { durationValidation }; //Проверка продолжительности

function durationValidation(event) {
  event.preventDefault();
  var formData = new FormData(popupForm);
  var timeFrom = +formData.get('timeFrom').split(':').join('');
  var timeTo = +formData.get('timeTo').split(':').join('');

  if (timeTo - timeFrom > 600) {
    alert('Exceeded duration limit!');
    closePopup();
  } else {
    editSaveHandler(event);
  }
} //проверка до начала события


function validationBeforeEventStarts(event) {
  event.preventDefault();
  var currentDate = new Date();
  var formData = new FormData(popupForm);
  var dateOfEvent = new Date(formData.get('dateFrom'));
  var hoursOfEvent = formData.get('timeFrom').split(':');
  dateOfEvent.setHours(hoursOfEvent[0], hoursOfEvent[1]);
  var mins = 15 * 60 * 1000;

  if (dateOfEvent.getDate() == currentDate.getDate()) {
    dateOfEvent.getTime() - currentDate.getTime() > mins ? alert('Forbidden! The event is too soon.') : editSaveHandler(event);
  }
}