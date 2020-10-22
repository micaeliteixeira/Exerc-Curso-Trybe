// 01 - Redux: Define an Action Creator 

const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
  return action;
}

// 02 - Redux: Dispatch an Action Event

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());