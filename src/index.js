import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD"; // I changed types strings to variables because JS will tell me if something is wrong with variables.
const MINUS = "MINUS";

// // reducer is a function that modify our data and whatever reducer function returns, it becomes our data
// // And Reducer function will be a place where only can change our data => state
// const reducer = () => { return "something"};
// // reducer function is necessry to create store
// const store = createStore(reducer);

const countModifier = (count = 0, action) => {
  // action is a second parameter, Action is the way that we comunicate with the countModifier (reducer)
  // the action has to be an object And action MUST have a type
  // dispatch method sends an action to reducer function
  // Here is going to modify the state (in this case => count)
  // console.log(count, action);

  // // option 1
  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }

  // option 2 <improvement>
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier); // create a place where data will be stored

const onChange = () => {
  // console.log("There was a change on the store");
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); // subscribe method allows us to listen for changes in our store

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
