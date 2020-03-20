import renderListItems from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
import { addItem } from './list/additem';//eslint-disable-line
import { onChangeFunc } from './list/onchangefunc';//eslint-disable-line
import { onDeleteBtn } from './list/delete';//eslint-disable-line
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
