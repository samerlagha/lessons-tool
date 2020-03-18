
import { createDaysOfWeek } from './calendar/render-week.js';
import { renderCalendar } from './calendar/render-calendar.js';
import { renderSidebar } from './calendar/sidebar.js';
import { displayCurrentWeek, switchWeekForward } from './calendar/render-current-week.js';
import { closePopup, createPopup } from './calendar/create-popup.js';
import { renderEvents, mapEvents } from './calendar/render-events.js';
import { editSaveHandler } from './calendar/save-event.js';
import { deleteEvent } from './calendar/delete-event.js';
import { durationValidation } from './calendar/validating-form.js';
import { renderRedLine } from './calendar/redline.js';
import { setItemToStorage, getItemFromStorage } from './calendar/storage.js';
import './index.scss';