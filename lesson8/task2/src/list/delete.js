import { deleteTask, getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
import { renderListItems } from './renderer.js';

const listElem = document.querySelector('.list');

export const onDeleteBtn = event => {
    const isDeleteBtn = event.target.classList.contains('delete-btn');
    if (!isDeleteBtn) {
        return;
    }

    const taskId = event.target.parentNode.id;

    deleteTask(taskId)
    .then(() => getTasksList())
    .then(arrayOfTasks => {
        setItem('arrayOfTasks', arrayOfTasks);
        renderListItems();
    });
};
listElem.addEventListener('click', onDeleteBtn);