const { createStore } = require("redux");

const initialState = {
  name: "rao",
  counter: 50
};

function reducer() {
  return initialState;
}

module.exports = createStore(reducer);
