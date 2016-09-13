import React from 'react';

import ViewActions from 'actions/View';

import CurrentUser from 'stores/CurrentUser';

const Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState () {
    return {
      email: '',
      error: CurrentUser.getState().login_error,
      password: ''
    };
  },

  componentWillMount () {
    CurrentUser.addChangeListener(this._handleCurrentUserChange);
  },

  _handleCurrentUserChange () {
    const current_user = CurrentUser.getState();

    if (current_user.login_error) {
      this.setState({
        error: current_user.login_error
      });
    } else if (current_user.details.id) {
      this.context.router.push('/');
    }
  },

  _handleFieldChange (name, e) {
    this.setState({
      [name]: e.target.value
    });
  },

  _handleLogin () {
    if (this.state.email && this.state.password) {
      ViewActions.login(this.state.email, this.state.password);
    } else {
      this.setState({
        error: 'Enter your email and password.'
      });

      setTimeout(() => {
        this.setState({
          error: null
        });
      }, 1500);
    }
  },

  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <input
          onChange={this._handleFieldChange.bind(null, 'email')}
          placeholder='Email'
          style={styles.field}
          type='email'
          value={this.state.email}
        />
        <input
          onChange={this._handleFieldChange.bind(null, 'password')}
          placeholder='Password'
          style={styles.field}
          type='password'
          value={this.state.password}
        />
        <div onClick={this._handleLogin} style={styles.button}>
          {this.state.error || 'Login' }
        </div>
      </div>
    );
  },

  styles () {
    return {
      component: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -100,
        transform: 'translate(-50%, -50%)',
        width: 300
      },
      field: {
        background: '#fff',
        padding: 10,
        borderRadius: 3,
        marginBottom: 15,
        border: '1px solid #ccc',
        width: '100%'
      },
      button: {
        background: '#333',
        color: '#fff',
        padding: '15px 30px',
        textAlign: 'center',
        borderRadius: 3,
        fontSize: 18,
        cursor: 'pointer'
      }
    };
  }
});

module.exports = Login;