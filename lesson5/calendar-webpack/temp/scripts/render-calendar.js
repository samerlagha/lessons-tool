import { currentWeek } from './render-current-week.js';
import { createPopup } from './create-popup.js';
export { renderCalendar };
var calendar = document.querySelector('.calendar'); //render calendar

var renderCalendar = function renderCalendar() {
  calendar.innerHTML = '';
  var week = document.createElement('div');
  week.classList.add('calendar__week-bar');
  calendar.append(week);

  for (var i = 1; i <= 7; i++) {
    var day = document.createElement('div');
    day.classList.add('calendar__day-bar');
    day.setAttribute('data-day', i - 1);
    week.append(day);

    for (var j = 1; j <= 24; j++) {
      var hour = document.createElement('div');
      hour.classList.add('calendar__hour-bar');
      hour.setAttribute('data-day', i - 1);
      hour.setAttribute('data-hour', j - 1);
      hour.setAttribute('data-date', currentWeek[i - 1]);
      day.append(hour);
    }
  }

  week.addEventListener('click', createPopup);
};