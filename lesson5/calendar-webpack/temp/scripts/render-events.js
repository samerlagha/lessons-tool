import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.find";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { setItemToStorage, getItemFromStorage } from './storage.js';
export { renderEvents, mapEvents }; //map events

function mapEvents() {
  var events = getItemFromStorage('events') || [];
  var newEvents = [];
  events.forEach(function (event) {
    if (new Date(event.dateFrom).getDate() !== new Date(event.dateTo).getDate()) {
      var firstObjectEvent = {
        title: event.title,
        dateFrom: event.dateFrom,
        dateTo: new Date(new Date(event.dateFrom).getFullYear(), new Date(event.dateFrom).getMonth(), new Date(event.dateFrom).getDate(), 23, 59),
        description: event.description,
        colorChooser: event.colorChooser,
        id: event.id
      };
      var secondObjectEvent = {
        title: event.title,
        dateFrom: new Date(new Date(event.dateTo).getFullYear(), new Date(event.dateTo).getMonth(), new Date(event.dateTo).getDate()),
        dateTo: event.dateTo,
        description: event.description,
        colorChooser: event.colorChooser,
        id: event.id
      };
      newEvents.push(firstObjectEvent, secondObjectEvent);
    } else {
      newEvents.push(event);
    }
  });
  setItemToStorage('events', newEvents);
  return newEvents;
} //render event


function renderEvents() {
  var newEvents = mapEvents();
  var hourBar = document.querySelectorAll('.calendar__hour-bar');

  _toConsumableArray(hourBar).map(function (hourBar) {
    var eventDiv = document.querySelector('.day-event');

    if (hourBar.contains(eventDiv)) {
      eventDiv.remove();
    }
  });

  console.log(newEvents);
  return newEvents.map(function (event) {
    var eventDiv = document.createElement('div');
    eventDiv.classList.add('day-event');
    eventDiv.setAttribute('data-id', event.id);
    var title = event.title;
    var dateFrom = event.dateFrom;
    var dateTo = event.dateTo;
    var description = event.description;
    eventDiv.innerHTML = "".concat(title, "<br>\n        ").concat(new Date(dateFrom).getHours(), ":").concat(new Date(dateFrom).getMinutes(), " - \n        ").concat(new Date(dateTo).getHours(), ":").concat(new Date(dateTo).getMinutes(), "<br>\n        ").concat(description);
    var allHours = document.querySelectorAll('.calendar__hour-bar');

    var hourBar = _toConsumableArray(allHours).find(function (hour) {
      var newEventId = "".concat(new Date(dateFrom).getDate()).concat(new Date(dateFrom).getHours()).concat(new Date(dateFrom).getMonth());
      var hourBarId = "".concat(new Date(hour.dataset.date).getDate()).concat(hour.dataset.hour).concat(new Date(hour.dataset.date).getMonth());
      return newEventId == hourBarId;
    });

    if (hourBar) hourBar.append(eventDiv);
    var divSize = (new Date(dateTo) - new Date(dateFrom)) / 1000 / 60;
    eventDiv.style.height = "".concat(divSize, "px");
    var divMargin = new Date(dateFrom).getMinutes();
    eventDiv.style.marginTop = "".concat(divMargin, "px");
    eventDiv.style.background = "".concat(event.colorChooser);
  });
}