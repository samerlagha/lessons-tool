import { renderCalendar } from "./render-calendar.js";


const redLine = document.querySelector(".redline");

const currentHourBar = displayRedLineOnCurrentHourBar();

export function renderRedLine() {

  const dot = document.createElement("div");
  dot.classList.add("dot");

  const line = document.createElement("div");
  line.classList.add("line");

  redLine.append(dot);
  redLine.append(line);

  currentHourBar.append(redLine);
}

renderRedLine();

function displayRedLineOnCurrentHourBar() {

  // renderRedLine();

  const hourContainer = document.querySelectorAll(".calendar__hour-bar");

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes()

  let positionInsideHourBar = currentMinute - 4;

  redLine.style.marginTop = positionInsideHourBar + 'px';

  return [...hourContainer].find(
    el => el.dataset.day == currentDay && el.dataset.hour == currentHour);
}

displayRedLineOnCurrentHourBar();
