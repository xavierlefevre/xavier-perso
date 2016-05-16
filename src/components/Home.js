import React, { Component } from 'react';
import Themes from './Themes';

export default class Home extends Component {
  render() {
    return (
      <div className="ui centered divided stackable grid">
        <Themes />
      </div>
    );
  }
}
