// const storage = {};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));

// const todos =[];
// const getItem = key => {
// if (localStorage.getItem(key) === null) {
//     setItem('todos', todos);
// }
// return JSON.parse(localStorage.getItem(key));
// }

// const setItem = (key, value) => {
// localStorage.setItem(key, JSON.stringify(value));
// };


// export { setItem, getItem, todos };
