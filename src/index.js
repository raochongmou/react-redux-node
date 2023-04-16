const state = require("./store/redux");
const {
  changeCounterAction,
  changeNameAction
} = require("./store/reduxActions");
// import { changeNameAction, changeCounterAction } from "./store/reduxActions.js";

state.subscribe(_ => {
  console.log("e", state.getState());
});

// const chageNameAction = { type: "chageName", name: "curry" };

// state.dispatch(chageNameAction);

// const changeCounterAction = { type: "changeCounter", counter: 11 };

// state.dispatch(changeCounterAction);

state.dispatch(changeNameAction("curry"));
state.dispatch(changeCounterAction(12));
