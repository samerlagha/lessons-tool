import { renderTasks } from './render';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList } from './tasksGateway';

export const onToggleTask = (e) => {
  const isCheckBox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckBox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList
    .find((task) => task.id === taskId);
  const done = e.target.checked;


  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done
      ? new Date().toISOString()
      : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
