import { renderListItems } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
export const addItem = newItem => {
    const tempObj = {};
    tempObj.text = newItem;
    tempObj.done = false;
    tempObj.createDate = new Date();
    tempObj.completedDate = undefined;
    taskInput.value = '';

    createTask(tempObj)
        .then(() => getTasksList())
        .then(arrayOfTasks => {
            setItem('arrayOfTasks', arrayOfTasks);
            renderListItems();
        });
};
createTaskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") return addItem(taskInput.value);
});


// 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data