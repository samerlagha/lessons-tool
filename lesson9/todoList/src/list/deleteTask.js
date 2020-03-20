import { setItem } from './storage';
import { renderTasks } from './render';
import { getTasksList, deleteTask } from './tasksGateway';

function onDeleteTask(event) {
  const deleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!deleteBtn) return;

  const taskId = event.target.parentNode.firstElementChild.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}

export { onDeleteTask };
