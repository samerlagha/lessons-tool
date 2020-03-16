import { setItemToStorage, getItemFromStorage } from './storage.js';
import { renderEvents } from './render-events.js';
import { closePopup, deleteButton } from './create-popup.js';

export { deleteEvent };

//удалить событие
function deleteEvent(event) {
    const events = getItemFromStorage('events');

    const parentPopup = deleteButton.closest('.popup');
    const clickedEventId = new FormData(parentPopup).get('id');

    for (let i = 0; i < events.length; i++) {
        
        if (clickedEventId == events[i].id) {
            events.splice(i, 1);
            i--;
        }
    };

    setItemToStorage('events', events);
    renderEvents();
    closePopup();
};

deleteButton.addEventListener('click', deleteEvent);