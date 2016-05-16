import React, { Component } from 'react';

export default class Lists extends Component {
  render() {
    return (
      <div className="ui list">
        {
          this.props.items.map((v, i) =>
            (<a href={v.link} target="_blank" className="item" key={i}>
              <i className={`big black bordered ${v.icon} icon`}></i>
              <div className="content">
                <div className="header">{v.title}</div>
                {v.description}
              </div>
            </a>)
          )
        }
      </div>
    );
  }
}

Lists.propTypes = {
  items: React.PropTypes.array,
};
