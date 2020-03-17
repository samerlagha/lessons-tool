import { renderEvents } from './render-events.js';
export { setItemToStorage, getItemFromStorage }; //установить Item для хранения localStorage

var setItemToStorage = function setItemToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

var getItemFromStorage = function getItemFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}; //Изменение хранилища


var onStorageChange = function onStorageChange(event) {
  if (event.key === 'events') {
    renderEvents();
  }
};

window.addEventListener('storage', onStorageChange);