import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.array.find";
import "core-js/modules/es.array.join";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { currentWeek } from './render-current-week.js';
import { getItemFromStorage } from './storage.js';
export { popup, popupForm, saveButton, deleteButton, closePopup, createPopup, createPopupButton, formFieldPopUp };
var weekBar = document.querySelector('.calendar__week-bar');
var popup = document.querySelector('.popup-modal');
var popupForm = document.querySelector('.popup');
var createButton = document.querySelector('.header__button_create');
var buttonClose = document.querySelector('.popup__header_close-btn');
var saveButton = document.querySelector('.popup__action_save');
var deleteButton = document.querySelector('.popup__action_delete');
var formFieldPopUp = {
  title: document.querySelector('.popup__header_title-input'),
  dateFrom: document.querySelector('.popup__info_date-from'),
  dateTo: document.querySelector('.popup__info_date-to'),
  timeFrom: document.querySelector('.popup__info_duration-from'),
  timeTo: document.querySelector('.popup__info_duration-to'),
  description: document.querySelector('.popup__description_text'),
  color: document.querySelector('.popup__color-scheme_chooser'),
  id: document.querySelector('.popup__id')
}; //создать всплывающее окно

function createPopup(event) {
  var targetEventId = event.target.getAttribute('data-id');
  var events = getItemFromStorage('events') || [];

  if (!targetEventId) {
    closePopup();
    formFieldPopUp.dateFrom.value = currentWeek[event.target.dataset.day].toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = currentWeek[event.target.dataset.day].toLocaleDateString().split('.').reverse().join('-');

    if (event.target.dataset.hour == 23) {
      formFieldPopUp.timeFrom.value = "".concat(event.target.dataset.hour, ":00");
      formFieldPopUp.timeTo.value = "".concat(+event.target.dataset.hour, ":59");
    } else if (event.target.dataset.hour == 9) {
      formFieldPopUp.timeFrom.value = "0".concat(event.target.dataset.hour, ":00");
      formFieldPopUp.timeTo.value = "".concat(+event.target.dataset.hour + 1, ":00");
    } else if (event.target.dataset.hour > 9) {
      formFieldPopUp.timeFrom.value = "".concat(event.target.dataset.hour, ":00");
      formFieldPopUp.timeTo.value = "".concat(+event.target.dataset.hour + 1, ":00");
    } else {
      formFieldPopUp.timeFrom.value = "0".concat(event.target.dataset.hour, ":00");
      formFieldPopUp.timeTo.value = "0".concat(+event.target.dataset.hour + 1, ":00");
    }

    formFieldPopUp.color.value = '#293dce';
    popup.style.display = 'block';
    deleteButton.style.visibility = 'hidden';
    return;
  }

  var clickedObjEvent = events.find(function (event) {
    return targetEventId == event.id;
  });
  formFieldPopUp.title.value = clickedObjEvent.title;
  formFieldPopUp.dateFrom.value = new Date(clickedObjEvent.dateFrom).toLocaleDateString().split('.').reverse().join('-');
  formFieldPopUp.dateTo.value = new Date(clickedObjEvent.dateTo).toLocaleDateString().split('.').reverse().join('-');
  formFieldPopUp.timeFrom.value = new Date(clickedObjEvent.dateFrom).toLocaleTimeString();
  formFieldPopUp.timeTo.value = new Date(clickedObjEvent.dateTo).toLocaleTimeString();
  formFieldPopUp.description.value = clickedObjEvent.description;
  formFieldPopUp.color.value = clickedObjEvent.colorChooser;
  formFieldPopUp.id.value = clickedObjEvent.id;
  deleteButton.style.visibility = 'visible';
  popup.style.display = 'block';
  deleteButton.dataset.id = event.target.dataset.id;
}

;

function createPopupButton() {
  var date = new Date();
  formFieldPopUp.dateFrom.value = date.toLocaleDateString().split('.').reverse().join('-');
  formFieldPopUp.dateTo.value = date.toLocaleDateString().split('.').reverse().join('-');

  if (date.getHours() == 23) {
    formFieldPopUp.timeFrom.value = "".concat(date.getHours(), ":00");
    formFieldPopUp.timeTo.value = "".concat(date.getHours(), ":59");
  } else if (date.getHours() == 9) {
    formFieldPopUp.timeFrom.value = "0".concat(date.getHours(), ":00");
    formFieldPopUp.timeTo.value = "".concat(date.getHours() + 1, ":00");
  } else if (date.getHours() > 9) {
    formFieldPopUp.timeFrom.value = "".concat(date.getHours(), ":00");
    formFieldPopUp.timeTo.value = "".concat(date.getHours() + 1, ":00");
  } else {
    formFieldPopUp.timeFrom.value = "0".concat(date.getHours(), ":00");
    formFieldPopUp.timeTo.value = "0".concat(date.getHours() + 1, ":00");
  }

  popup.style.display = 'block';
  deleteButton.style.visibility = 'hidden';
}

;
createButton.addEventListener('click', createPopupButton); //close Popup

function closePopup() {
  var popupTitle = document.querySelector('.popup__header_title-input');
  popupTitle.value = '';
  var popupDescription = document.querySelector('.popup__description_text');
  popupDescription.value = '';
  var popupId = document.querySelector('.popup__id');
  popupId.value = '0';
  popup.style.display = 'none';
}

;
buttonClose.addEventListener('click', closePopup);