const { ActionTypes } = require('constants/App');
const AppDispatcher = require('../AppDispatcher');

const Server = {
  loggedIn (current_user) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.LOGGED_IN,
      current_user
    });
  },

  loginError (error) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_ERROR,
      error
    });
  }
};

module.exports = Server;