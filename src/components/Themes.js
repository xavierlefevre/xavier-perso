import React, { Component } from 'react';

export default class Themes extends Component {
  constructor() {
    super();
    this.state = {
      themes: [
        {
          title: 'Professional',
          description: 'Related to work',
          icon: 'suitcase icon',
        },
        {
          title: 'Education',
          description: 'My different learning platforms',
          icon: 'book icon',
        },
        {
          title: 'Private',
          description: 'Mainly social personal networks',
          icon: 'spy icon',
        },
        {
          title: 'Design/Video',
          description: 'My attemps to design and video edition',
          icon: 'paint brush icon',
        },
      ],
    };
  }

  render() {
    return (
      <div className="row">
        {
          this.state.themes.map((v, i) =>
            (<div className="four wide column" key={i}>
              <h2 className="ui medium header">
                <i className={v.icon}></i>
                <div className="content">
                  {v.title}
                  <div className="sub header">{v.description}</div>
                </div>
              </h2>
            </div>)
          )
        }
      </div>
    );
  }
}
