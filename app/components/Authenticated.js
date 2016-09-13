import React from 'react';

const Authenticated = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  componentWillMount () {
    // This is where you should load data from the API
    // ViewActions.loadStuff();
    // Stuff.addChangeListener(this._handleStuffChange);
  },

  // _handleStuffChange () {
  //   this.setState({
  //     Stuff: Stuff.getState()
  //   });
  // },

  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <div>Global Authenticated UI Elements Go Here</div>
        <div>
          {React.cloneElement(this.props.children, {
            // pass on props here
            // Stuff: this.state.Stuff
          })}
        </div>
      </div>
    );
  },

  styles () {
    return {
      component: {
        maxWidth: 1600,
        margin: '0 auto',
        padding: '60px 0',
        textAlign: 'center'
      }
    };
  }
});

module.exports = Authenticated;