import { createStore } from "redux"; // create a place where data will be stored

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// // reducer is a function that modify our data and whatever reducer function returns, it becomes our data
// // And Reducer function will be a place where only can change our data => state
// const reducer = () => { return "something"};
// // reducer function is necessry to create store
// const store = createStore(reducer);

const countModifier = (count = 0) => {
  // Here is going to modify the state (in this case => count)
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
