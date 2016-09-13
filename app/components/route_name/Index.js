import React from 'react';

const Index = React.createClass({
  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        This should match up with a route and act as a "smart" or "container" component
      </div>
    );
  },

  styles () {
    return {
      component: {}
    };
  }
});

module.exports = Index;