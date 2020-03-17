import "core-js/modules/es.array.splice";
import { setItemToStorage, getItemFromStorage } from './storage.js';
import { renderEvents } from './render-events.js';
import { closePopup, deleteButton } from './create-popup.js';
export { deleteEvent }; //удалить событие

function deleteEvent(event) {
  var events = getItemFromStorage('events');
  var parentPopup = deleteButton.closest('.popup');
  var clickedEventId = new FormData(parentPopup).get('id');

  for (var i = 0; i < events.length; i++) {
    if (clickedEventId == events[i].id) {
      events.splice(i, 1);
      i--;
    }
  }

  ;
  setItemToStorage('events', events);
  renderEvents();
  closePopup();
}

;
deleteButton.addEventListener('click', deleteEvent);