import { renderListItems } from './list/renderer.js';
import { addItem } from './list/additem.js';
import { onChangeFunc } from './list/onchangefunc.js';
import { getTasksList } from './list/tasksGateway.js';
import { setItem } from './list/storage.js';
import { onDeleteBtn } from './list/delete.js';
import './index.scss';




document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(arrayOfTasks => {
            setItem('arrayOfTasks', arrayOfTasks);
            renderListItems();
        });
});

const onStorageChange = e => {
    if(e.key === 'arrayOfTasks') renderListItems();
};
window.addEventListener('storage', onStorageChange);


// 1. Get data from server 
// 2. Save data to front-ene storage
// 3. 







