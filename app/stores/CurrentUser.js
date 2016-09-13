const AppDispatcher = require('../AppDispatcher');
const { EventEmitter } = require('events'); //where does this come from?
const { ActionTypes } = require('constants/App');
const events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

const state = {
  //these should be adjusted to fit your needs
  details: {},
  login_error: null
};

const setState = newState => {
  Object.assign(state, newState);
  events.emit(CHANGE_EVENT);
};

const CurrentUser = {
  addChangeListener (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState () {
    return state;
  }
};

CurrentUser.dispatchToken = AppDispatcher.register(payload => {
  const action = payload.action;

  if (action.type === ActionTypes.LOGGED_IN) {
    setState({
      details: action.current_user,
      login_error: null
    });
  }

  if (action.type === ActionTypes.LOGIN_ERROR) {
    setState({
      login_error: action.error.message
    });

    setTimeout(() => {
      setState({
        login_error: null
      });
    }, 1500);
  }
});

module.exports = CurrentUser;