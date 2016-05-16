import React, { Component } from 'react';
import Lists from './Lists';

export default class Themes extends Component {
  constructor() {
    super();
    this.state = {
      themes: [
        {
          title: 'Professional',
          description: 'Related to work',
          icon: 'suitcase icon',
          items: [
            {
              title: 'Github',
              description: 'Repo Website',
            },
            {
              title: 'LinkedIn',
              description: 'Social Pro Website',
            },
            {
              title: 'HopWork',
              description: 'Freelance Platform',
            },
          ],
        },
        {
          title: 'Education',
          description: 'My different learning platforms',
          icon: 'book icon',
          items: [
            {
              title: 'Coursera',
              description: 'Silicon Valley Learning Site',
            },
            {
              title: 'Khan Academy',
              description: 'Basic Courses',
            },
            {
              title: 'Open Classroom',
              description: 'Digital Courses in French',
            },
          ],
        },
        {
          title: 'Private',
          description: 'Mainly social personal networks',
          icon: 'spy icon',
          items: [
            {
              title: 'Facebook',
              description: 'Need to present?',
            },
            {
              title: 'Twitter',
              description: 'Not very active',
            },
          ],
        },
        {
          title: 'Design/Video',
          description: 'My attemps to design and video edition',
          icon: 'paint brush icon',
          items: [
            {
              title: 'YouTube',
              description: 'My perso videos',
            },
            {
              title: 'Dribble',
              description: 'Not yet live',
            },
          ],
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
              <Lists items={v.items} />
            </div>)
          )
        }
      </div>
    );
  }
}
