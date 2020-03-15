import { funcForMakeMarkValuableNull, funcForMakeDataIdEmpty } from './edit_event.js';
import { dataId } from './edit_event.js';
import { setItem, getItem } from './storage.js';
import { renderEventObject } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages, onMakeMarkOnValidateTextNull } from './validate.js';
import { getEventList, deleteEvent } from './eventsGateway.js'

const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');

export const funcForDeleteEvene = () => {
    const eventsArray = getItem('eventsArray') || [];
    const currentObject = eventsArray.find(elem => elem.id === dataId);
    deleteEvent(currentObject.id)
        .then(() => getEventList())
        .then(eventsArray => {
            setItem('eventsArray', eventsArray);
            renderEventObject();
            funcForMakeMarkValuableNull();
            funcForMakeDataIdEmpty();
            renderRedLIne(); 
            onClearValidateMessages();
            onMakeMarkOnValidateTextNull();
        })
        .catch(err => {
            err.message = 'Server calls limit is exceeded. Need to update server URL';
            alert(err);
        });
    popupBlock.style.display = 'none';
    deleteBasket.style.display = 'none'; 
};
deleteBasket.addEventListener('click', funcForDeleteEvene);