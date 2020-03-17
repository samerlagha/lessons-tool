import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.find";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { renderCalendar } from "./render-calendar.js";
var redLine = document.querySelector(".redline");
var currentHourBar = displayRedLineOnCurrentHourBar();
export function renderRedLine() {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  var line = document.createElement("div");
  line.classList.add("line");
  redLine.append(dot);
  redLine.append(line);
  currentHourBar.append(redLine);
}
renderRedLine();

function displayRedLineOnCurrentHourBar() {
  // renderRedLine();
  var hourContainer = document.querySelectorAll(".calendar__hour-bar");
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();
  var positionInsideHourBar = currentMinute - 4;
  redLine.style.marginTop = positionInsideHourBar + 'px';
  return _toConsumableArray(hourContainer).find(function (el) {
    return el.dataset.day == currentDay && el.dataset.hour == currentHour;
  });
}

displayRedLineOnCurrentHourBar();