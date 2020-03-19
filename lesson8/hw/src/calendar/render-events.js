import { setItemToStorage, getItemFromStorage } from './storage.js';

export { renderEvents, mapEvents };

//map events
function mapEvents() {
    const events = getItemFromStorage('events') || [];

    const newEvents = [];
    
    events.forEach(event => {

        if (new Date(event.dateFrom).getDate() !== new Date(event.dateTo).getDate()) {

            const firstObjectEvent = {
                title: event.title,
                dateFrom: event.dateFrom,
                dateTo: new Date(
                    new Date(event.dateFrom).getFullYear(),
                    new Date(event.dateFrom).getMonth(),
                    new Date(event.dateFrom).getDate(),
                    23,
                    59
                    ),
                description: event.description,
                colorChooser: event.colorChooser,
                id: event.id,
            };

            const secondObjectEvent = {
                title: event.title,
                dateFrom: new Date(
                    new Date(event.dateTo).getFullYear(),
                    new Date(event.dateTo).getMonth(),
                    new Date(event.dateTo).getDate(),
                    ),
                dateTo: event.dateTo,
                description: event.description,
                colorChooser: event.colorChooser,
                id: event.id,
            };
            newEvents.push(firstObjectEvent, secondObjectEvent);

        } else {
            newEvents.push(event);
        }
    });

    setItemToStorage('events', newEvents);
    return newEvents;
}
//render event
function renderEvents() { 
    const newEvents = mapEvents();

    const hourBar = document.querySelectorAll('.calendar__hour-bar');
    
    [...hourBar].map(hourBar => {
        const eventDiv = document.querySelector('.day-event');
        if (hourBar.contains(eventDiv)){
            eventDiv.remove();
        }
    });
    
    console.log(newEvents);

    return newEvents.map(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('day-event');
        eventDiv.setAttribute('data-id', event.id);

        const title = event.title;
        const dateFrom = event.dateFrom;
        const dateTo = event.dateTo;
        const description = event.description;
        
        eventDiv.innerHTML = `${title}<br>
        ${new Date(dateFrom).getHours()}:${new Date(dateFrom).getMinutes()} - 
        ${new Date(dateTo).getHours()}:${new Date(dateTo).getMinutes()}<br>
        ${description}`;

        const allHours = document.querySelectorAll('.calendar__hour-bar');
        const hourBar = [...allHours].find(hour => {
            const newEventId = `${new Date(dateFrom).getDate()}${new Date(dateFrom).getHours()}${new Date(dateFrom).getMonth()}`;
            const hourBarId = `${new Date(hour.dataset.date).getDate()}${hour.dataset.hour}${new Date(hour.dataset.date).getMonth()}`;
            return newEventId == hourBarId;
        });

        if (hourBar) hourBar.append(eventDiv);

        const divSize = (new Date(dateTo) - new Date(dateFrom)) / 1000 / 60;
        eventDiv.style.height = `${divSize}px`;

        const divMargin = new Date(dateFrom).getMinutes();
        eventDiv.style.marginTop = `${divMargin}px`;

        eventDiv.style.background = `${event.colorChooser}`;
    });
}
