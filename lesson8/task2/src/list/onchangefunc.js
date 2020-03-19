import { renderListItems } from './renderer.js';
import { setItem, getItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

const listElem = document.querySelector('.list');
export const onChangeFunc = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }

    const arrayOfTasks = getItem('arrayOfTasks');
    const taskId = event.target.parentNode.id;
    const taskData = arrayOfTasks.find(task => task.id === taskId);

    Object.assign(taskData, { done: event.target.checked });
    if(taskData.done === true){
        taskData.completedDate = new Date();
    }
    if(taskData.done === false){
        taskData.createdDate = new Date();
        taskData.completedDate = null;
    }

    updateTask(taskId, taskData)
        .then(() => getTasksList())
        .then(arrayOfTasks => {
            setItem('arrayOfTasks', arrayOfTasks);
            renderListItems();
        });
};
listElem.addEventListener('change', onChangeFunc);



// 1. Prepare data
// 2. Write new data in bd
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data