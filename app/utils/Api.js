import ServerActions from 'actions/Server';
import Axios from 'axios';

import AppConfig from 'config/App';

import CurrentUser from 'stores/CurrentUser';

const getAxios = () => {
  return Axios.create({
    baseURL: AppConfig.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      // In most cases you need to send auth headers to validate requests
      'token': CurrentUser.getState().details.token
    }
  });
};

const ApiUtils = {
  login (email, password) {
    if (password === 'error') {
      getAxios().post('login', { email, password })
        .then(response => {
          ServerActions.loggedIn(response.data);
        })
        .catch(() => {
          ServerActions.loginError({
            message: 'Login credentials are invalid. Try again.'
          });
        });
    } else {
      ServerActions.loggedIn({
        id: 1,
        username: 'Captain America',
        token: '12345ABCDEFG'
        // other user/auth details, will vary per application
      });
    }
  }
};

module.exports = ApiUtils;