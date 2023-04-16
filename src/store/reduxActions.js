const [CHAGENAME, CHAGECOUNTER] = require("./constant.js");

function changeNameAction(actionName) {
  return {
    type: CHAGENAME,
    name: actionName
  };
}
function changeCounterAction(actionName) {
  return {
    type: CHAGECOUNTER,
    counter: actionName
  };
}

module.exports = { changeNameAction, changeCounterAction };
// export { changeNameAction, changeCounterAction };
