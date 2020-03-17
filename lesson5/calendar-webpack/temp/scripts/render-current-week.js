import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
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

import { createDaysOfWeek } from './render-week.js';
import { renderCalendar } from './render-calendar.js';
import { renderEvents } from './render-events.js';
export { currentWeek, displayCurrentWeek, switchWeekForward, switchWeekBackward, displayMonth };
var currentWeek = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()]; //render left &rigth & block monthYear

var forwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-right');
var backwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-left');
var monthAndYear = document.querySelector('.header__current-month-year'); //показать текущую неделю

var displayCurrentWeek = function displayCurrentWeek(week) {
  var currentDate = new Date().getDate();
  var currentDay = new Date().getDay();
  var counterPrev = currentDay;
  var counterNext = 1;

  for (var i = 0; i < week.length; i++) {
    if (i < currentDay) {
      var date = currentDate - counterPrev;
      week[i] = new Date(new Date().setDate(date));
      counterPrev--;
    } else if (i == currentDay) {
      week[i] = new Date();
    } else {
      var _date = currentDate + counterNext;

      week[i] = new Date(new Date().setDate(_date));
      counterNext++;
    }
  }

  displayMonth(currentWeek);
  createDaysOfWeek(currentWeek);
  renderCalendar();
  renderEvents();
};

displayCurrentWeek(currentWeek);
var todayBtn = document.querySelector('.header__button_today');

var todayWeekSwitcher = function todayWeekSwitcher() {
  displayCurrentWeek(currentWeek);
  renderCalendar();
  renderEvents();
};

var switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher); //переключить сегодняшнюю неделю

function forwardSwitcher(currentWeek) {
  var newWeek = _toConsumableArray(currentWeek);

  newWeek.map(function (dateOfDay) {
    var newDate = dateOfDay.getDate();
    dateOfDay = new Date(dateOfDay.setDate(newDate + 7));
  });
  displayMonth(currentWeek);
  createDaysOfWeek(currentWeek);
  renderCalendar();
  renderEvents();
}

;
var switchWeekForward = forwardSwitcherBtn.addEventListener('click', forwardSwitcher.bind(forwardSwitcherBtn, currentWeek));

var backwardSwitcher = function backwardSwitcher(currentWeek) {
  var newWeek = _toConsumableArray(currentWeek);

  newWeek.map(function (dateOfDay) {
    var newDate = dateOfDay.getDate();
    dateOfDay = new Date(dateOfDay.setDate(newDate - 7));
  });
  displayMonth(currentWeek);
  createDaysOfWeek(currentWeek);
  renderCalendar();
  renderEvents();
};

var switchWeekBackward = backwardSwitcherBtn.addEventListener('click', backwardSwitcher.bind(backwardSwitcherBtn, currentWeek));

function displayMonth(week) {
  var arrMonth = [];
  var arrYear = [];
  var result;

  for (var i = 0; i < week.length; i++) {
    var month = week[i].toDateString().split(' ')[1];
    var year = week[i].toDateString().split(' ')[3];

    if (arrMonth.indexOf(month) == -1) {
      arrMonth.push(month);
    }

    ;

    if (arrYear.indexOf(year) == -1) {
      arrYear.push(year);
    }
  }

  if (arrMonth.length == 1) {
    result = "".concat(arrMonth[0], " ").concat(arrYear[0]);
  }

  if (arrMonth.length == 2) {
    result = "".concat(arrMonth[0], " - ").concat(arrMonth[1], " ").concat(arrYear[0]);
  }

  if (arrYear.length == 2) {
    result = "".concat(arrMonth[0], " ").concat(arrYear[0], " - ").concat(arrMonth[1], " ").concat(arrYear[1]);
  }

  monthAndYear.innerHTML = result;
}