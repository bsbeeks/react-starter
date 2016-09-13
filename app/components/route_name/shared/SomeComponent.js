import React from 'react';

const SomeComponent = React.createClass({
  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        This should be a component that is only shared across components within this route/container.
      </div>
    );
  },

  styles () {
    return {
      component: {}
    };
  }
});

module.exports = SomeComponent;