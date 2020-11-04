import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// // reducer is a function that modify our data and whatever reducer function returns, it becomes our data
// // And Reducer function will be a place where only can change our data => state
// const reducer = () => { return "something"};
// // reducer function is necessry to create store
// const store = createStore(reducer);

const countModifier = (count = 0, action) => {
  // action is a second parameter, Action is the way that we comunicate with the countModifier (reducer)
  // dispatch method sends an action to reducer function
  // Here is going to modify the state (in this case => count)
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier); // create a place where data will be stored

countStore.dispatch({ type: "ADD" }); // the action has to be an object
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
