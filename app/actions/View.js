const ApiUtils = require('utils/Api');

const View = {
  login (email, password) {
    ApiUtils.login(email, password);
  }
};

module.exports = View;