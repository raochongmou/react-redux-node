const initialState = {
  name: "rao",
  counter: 52
};

const [CHAGENAME, CHAGECOUNTER] = require("./constant");

module.exports = function reducer(state = initialState, actions) {
  switch (actions.type) {
    case CHAGENAME:
      return { ...state, name: actions.name };
    case CHAGECOUNTER:
      return { ...state, counter: state.counter + actions.counter };
    default:
      return state;
  }
};
