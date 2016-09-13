const { Dispatcher } = require('flux');
const { PayloadSources } = require('constants/App');

const AppDispatcher = Object.assign(new Dispatcher(), {
  handleServerAction (action) {
    const payload = {
      source: PayloadSources.SERVER_ACTION,
      action
    };

    this.dispatch(payload);
  },

  handleViewAction (action) {
    const payload = {
      source: PayloadSources.VIEW_ACTION,
      action
    };

    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
