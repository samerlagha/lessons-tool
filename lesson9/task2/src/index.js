import { renderListItems } from './list/renderer';
import { addItem } from './list/additem';
import { onChangeFunc } from './list/onchangefunc';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
import { onDeleteBtn } from './list/delete';
import './index.scss';


document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((arrayOfTasks) => {
      setItem('arrayOfTasks', arrayOfTasks);
      renderListItems();
    });
});

const onStorageChange = (e) => {
  if (e.key === 'arrayOfTasks') renderListItems();
};
window.addEventListener('storage', onStorageChange);


// 1. Get data from server
// 2. Save data to front-ene storage
// 3.
