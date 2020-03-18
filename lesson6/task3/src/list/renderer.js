import { getItem } from './storage.js';
import './main.scss';

const listElem = document.querySelector('.list');
export const renderListItems = () => {
    listElem.innerHTML = '';
    const arrayOfTasks = getItem('arrayOfTasks') || [];
    const listItemsElems = arrayOfTasks
        .sort((a, b) => a.done - b.done)   
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.setAttribute('id', id);
            
            const textElem = document.createElement('span');
            textElem.textContent = text;

            if (done) {
                listItemElem.classList.add('list__item_done');
                textElem.classList.add('list__item-text');
            }
            if(!done){
                textElem.classList.remove('list__item-text');
            }

            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            
            const deleteBtnElem = document.createElement('button');
            deleteBtnElem.classList.add('delete-btn');

            listItemElem.append(checkboxElem, textElem, deleteBtnElem);
            return listItemElem;
        });
    const tempNoDoneList = listItemsElems
        .filter(elem => !elem.classList.contains('list__item_done'))
        .sort((a, b) => b.createdDate > a.createdDate ? 1 : -1);
    const tempDoneList = listItemsElems
        .filter(elem => elem.classList.contains('list__item_done'));
    listElem.append(...tempNoDoneList);
    listElem.append(...tempDoneList);
};