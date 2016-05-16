import React, { Component } from 'react';

export default class Lists extends Component {
  render() {
    return (
      <div className="ui list">
        {
          this.props.items.map((x, i) =>
            (<div className="item" key={i}>
              <i className="book icon"></i>
              <div className="content">
                <div className="header">{x.title}</div>
                {x.description}
              </div>
            </div>)
          )
        }
      </div>
    );
  }
}

Lists.propTypes = {
  items: React.PropTypes.array,
};
