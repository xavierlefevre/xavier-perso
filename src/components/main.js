import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui one column centered grid">
          <img id="title" src="images/logo.png" alt="Xavier Logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
};
