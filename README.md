# Vanilla Redux

Learning Vanilla-Redux and React-Redux

## Store & Reducer

- `createStore(reducer function)`: Create a place where data will be stored. reducer function is necessry to create store
- Reducer: reducer is a function that modify our data and whatever reducer function returns, it becomes our data. And Reducer function will be a place where only can change our data => state

## Actions

Action is a second parameter, Action is the way that we comunicate with Reducer

## Methods

- `dispatch()` sends an action to reducer function. Action has to be an object
- `getState()` get current state
- `subscribe()` allows us to listen for changes in our store
