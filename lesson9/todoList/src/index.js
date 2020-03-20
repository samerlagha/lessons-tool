import { initTodoListHandlers } from './list/todoList';
import { renderTasks } from './list/render';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
// import {onToggleTask } from './update.js';


document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });
  initTodoListHandlers();
});


const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
