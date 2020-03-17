import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { currentWeek } from './render-current-week.js';
export { createDaysOfWeek }; //создать день недели

function createDaysOfWeek(week) {
  var daysContainer = document.querySelector('.days-container');
  daysContainer.innerHTML = '';
  var gmtBlock = document.createElement('div');
  gmtBlock.textContent = 'GMT+02';
  gmtBlock.classList.add('gmt');
  daysContainer.append(gmtBlock);

  for (var i = 0; i < week.length; i++) {
    var oneDay = document.createElement('div');
    oneDay.classList.add('day');
    var dayName = document.createElement('span');
    dayName.classList.add('day-name');
    dayName.textContent = week[i].toDateString().split(' ')[0];
    oneDay.append(dayName);
    var dayDate = document.createElement('div');
    dayDate.classList.add('day-date');
    dayDate.textContent = week[i].getDate();
    oneDay.append(dayDate);

    if (week[i].toDateString() == new Date().toDateString()) {
      dayDate.classList.add('day-date_current');
    }

    daysContainer.append(oneDay);
  }
}

;