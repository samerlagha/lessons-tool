import { setItem, getItem } from './storage.js';
import { renderEventObject } from './generate_event_object.js';
import { counter } from './generate_another_week.js';
import { onClickOnPlaceInField } from './event_on_click.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages, onMakeMarkOnValidateTextNull } from './validate.js';
import { markOnValidateText } from './validate.js';
import { markOnFactOfEdit, dataId } from './edit_event.js';
import { funcForMakeMarkValuableNull, funcForMakeDataIdEmpty } from './edit_event.js';
import { getEventList, createEvent, updatEvent } from './eventsGateway.js'


const fieldOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');


const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
    iconDelete.style.display = 'none';
    fieldOfDays.addEventListener('click', onClickOnPlaceInField);
    onClearValidateMessages();
    funcForMakeDataIdEmpty();
    onMakeMarkOnValidateTextNull();
    funcForMakeMarkValuableNull();
};
lockWindow.addEventListener('click', funcForLockWindow);


const form = document.querySelector('.popup');
export const onFormSubmit = event => {
    event.preventDefault();

    let tempObj = [...new FormData(form)]
        .reduce((acc, [field,value]) => ({...acc,[field]:value}),{});

    tempObj.startTime = tempObj.startTime.split('-');
    tempObj.startTime[1] = tempObj.startTime[1] - 1;
    tempObj.startTimePlace = tempObj.startTimePlace.split(':');
    //tempObj.startTime = [...tempObj.startTime, ...tempObj.startTimePlace]; //this expression makes the same as next expression that is down
    tempObj.startTime = tempObj.startTime.concat(tempObj.startTimePlace);
    tempObj.startTime = new Date(...tempObj.startTime);

    tempObj.endTime = tempObj.endTime.split('-');
    tempObj.endTime[1] = tempObj.endTime[1] - 1;
    tempObj.endTimePlace = tempObj.endTimePlace.split(':');
    //tempObj.endTime = [...tempObj.endTime, ...tempObj.endTimePlace]; //this expression makes the same as next expression that is down
    tempObj.endTime = tempObj.endTime.concat(tempObj.endTimePlace);
    tempObj.endTime = new Date(...tempObj.endTime);
    
    delete tempObj.startTimePlace;
    delete tempObj.endTimePlace;
    
    if(markOnValidateText === 1) return;
    
    if(markOnFactOfEdit === 0){
        createEvent(tempObj)
            .then(() => getEventList())
            .then(eventsArray => {
                setItem('eventsArray', eventsArray);
                renderEventObject();
                if(counter === 0) renderRedLIne();
            })
            .catch(err => {
                err.message = 'Server calls limit is exceeded. Need to update server URL';
                alert(err);
            });
    }else if(markOnFactOfEdit === 1){
        getEventList()
            .then(eventsArray => {
                const obj = eventsArray.find(element => element.id === dataId);
                Object.assign(obj,tempObj); 
                updatEvent(obj.id, obj)
                    .then(() => getEventList())
                    .then(eventsArray => { 
                        setItem('eventsArray', eventsArray);
                        renderEventObject();
                        funcForMakeMarkValuableNull();
                        funcForMakeDataIdEmpty();
                        if(counter === 0) renderRedLIne();
                    })
                    .catch(err => {
                        err.message = 'Server calls limit is exceeded. Need to update server URL';
                        alert(err);
                    });
            });
    }
    popupBlock.style.display = 'none';
    fieldOfDays.addEventListener('click', onClickOnPlaceInField);
    
};
form.addEventListener('submit', onFormSubmit);