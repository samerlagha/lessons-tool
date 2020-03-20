import { deleteTask, getTasksList } from './tasksGateway';
import { setItem } from './storage';
import { renderListItems } from './renderer';

const listElem = document.querySelector('.list');

export const onDeleteBtn = (event) => {
  const isDeleteBtn = event.target.classList.contains('delete-btn');
  if (!isDeleteBtn) {
    return;
  }

  const taskId = event.target.parentNode.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((arrayOfTasks) => {
      setItem('arrayOfTasks', arrayOfTasks);
      renderListItems();
    });
};
listElem.addEventListener('click', onDeleteBtn);
