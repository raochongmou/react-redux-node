const initialState = {
  name: "rao",
  counter: 50
};

const [CHAGENAME, CHAGECOUNTER] = require("./constant");

module.exports = function reducer(state = initialState, actions) {
  if (actions.type === CHAGENAME) {
    return { ...state, name: actions.name };
  } else if (actions.type === CHAGECOUNTER) {
    return { ...state, counter: state.counter + actions.counter };
  }
  return state;
};
