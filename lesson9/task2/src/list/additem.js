import { renderListItems } from './renderer';
import { setItem } from './storage';
import { createTask, getTasksList } from './tasksGateway';

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
export const addItem = (newItem) => {
  const tempObj = {};
  tempObj.text = newItem;
  tempObj.done = false;
  tempObj.createDate = new Date();
  tempObj.completedDate = undefined;
  taskInput.value = '';

  createTask(tempObj)
    .then(() => getTasksList())
    .then((arrayOfTasks) => {
      setItem('arrayOfTasks', arrayOfTasks);
      renderListItems();
    });
};
createTaskBtn.addEventListener('click', () => {
  if (taskInput.value !== '') return addItem(taskInput.value);
});
