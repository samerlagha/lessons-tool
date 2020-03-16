import { createDaysOfWeek } from './render-week.js';
import { renderCalendar } from './render-calendar.js';
import { renderSidebar } from './sidebar.js';
import { displayCurrentWeek, switchWeekForward } from './render-current-week.js';
import { closePopup, createPopup } from './create-popup.js';
import { renderEvents, mapEvents } from './render-events.js';
import { editSaveHandler } from './save-event.js';
import { deleteEvent } from './delete-event.js';
import { durationValidation } from './validating-form.js';
import { renderRedLine } from './redline.js';
import { setItemToStorage, getItemFromStorage } from './storage.js';



