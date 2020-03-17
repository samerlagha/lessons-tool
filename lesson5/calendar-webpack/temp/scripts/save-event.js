import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.reduce";
import "core-js/modules/es.array.splice";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { setItemToStorage, getItemFromStorage } from './storage.js';
import { renderEvents } from './render-events.js';
import { popupForm, closePopup } from './create-popup.js';
export { editSaveHandler }; //редактировать & Сохранить Handler

var editSaveHandler = function editSaveHandler(event) {
  event.preventDefault();
  var events = getItemFromStorage('events') || [];

  var formData = _toConsumableArray(new FormData(popupForm));

  var newEvent = formData.reduce(function (acc, item) {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  var timeFrom = newEvent.timeFrom.split(':');
  newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
  var timeTo = newEvent.timeTo.split(':');
  newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

  if (newEvent.id === "0") {
    newEvent.id = Math.floor(Math.random() * 1000);

    if (newEvent.title == '') {
      newEvent.title = 'No Title';
    }

    events.push(newEvent);
  } else {
    events.map(function (event, index) {
      if (newEvent.id == event.id) {
        events.splice(index, 1);
      }

      return event;
    });
    events.push(newEvent);
  }

  setItemToStorage('events', events);
  closePopup();
  renderEvents();
  console.log(events);
};

popupForm.addEventListener('submit', editSaveHandler);