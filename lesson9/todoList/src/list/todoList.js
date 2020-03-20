import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListItem = document.querySelector('.list');
  todoListItem.addEventListener('click', onToggleTask);
  todoListItem.addEventListener('click', onDeleteTask);
};
