import { renderTimingSidebar } from './sidebar_timing.js';
import { generateDaysPlace } from './sidebar_days.js';
import { renderCurrentWeek } from './current_week.js';
import { renderAnotherWeek } from './generate_another_week.js';
import { renderTitleDate } from './generate_title_date.js';
import { todayButtonFunc } from './today_button.js';
import { renderRedLIne } from './redline.js';
import { renderEventObject } from './generate_event_object.js';
import { onCreateButton } from './create_button.js';
import { onFormSubmit } from './popup_funcs.js';
import { onClickOnPlaceInField } from './event_on_click.js';
import { funcForEditEvent } from './edit_event.js';
import { funcForDeleteEvene } from './delete_event.js';
import { onInputValidate } from './validate.js';
import { getEventList, createEvent, updatEvent, deleteEvent } from './eventsGateway.js'


document.addEventListener('DOMContentLoaded', () => {
    renderEventObject();
    renderRedLIne();
});

const onStorageChange = e => {
    if (e.key === 'eventsArray') renderEventObject();
};
window.addEventListener('storage', onStorageChange);