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
          icon: 'suitcase',
          items: [
            {
              title: 'Github',
              description: 'Repo Website',
              icon: 'github',
              link: 'https://github.com/xavierlefevre',
            },
            {
              title: 'LinkedIn',
              description: 'Social Pro Website',
              icon: 'linkedin',
              link: 'https://fr.linkedin.com/in/lefevrexavier',
            },
            {
              title: 'HopWork',
              description: 'Freelance Platform',
              icon: 'plus',
              link: 'https://www.hopwork.fr/profile/xavierlefevre',
            },
          ],
        },
        {
          title: 'Education',
          description: 'My different learning platforms',
          icon: 'book',
          items: [
            {
              title: 'Coursera',
              description: 'Silicon Valley Learning Site',
              icon: 'plus',
              link: 'https://www.coursera.org/user/i/e06bd90f072ab3d5503bb97d83b44592',
            },
            {
              title: 'Duolingo',
              description: 'Digital Courses in French',
              icon: 'plus',
              link: 'https://www.duolingo.com/xavierlefevre',
            },
            {
              title: 'Khan Academy',
              description: 'Basic Courses',
              icon: 'plus',
              link: 'https://www.khanacademy.org/profile/xavierlefevre/',
            },
            {
              title: 'Open Classroom',
              description: 'Digital Courses in French',
              icon: 'plus',
              link: 'https://openclassrooms.com/membres/xavierlefevre-1',
            },
          ],
        },
        {
          title: 'Private',
          description: 'Mainly social personal networks',
          icon: 'spy',
          items: [
            {
              title: 'Facebook',
              description: 'Need to present?',
              icon: 'facebook',
              link: 'https://www.facebook.com/xavier.lefevre',
            },
            {
              title: 'Twitter',
              description: 'Not very active',
              icon: 'twitter',
              link: 'https://twitter.com/xavier_lef',
            },
          ],
        },
        {
          title: 'Design/Video',
          description: 'My attemps to design and video edition',
          icon: 'paint brush',
          items: [
            {
              title: 'YouTube',
              description: 'My perso videos',
              icon: 'youtube play',
              link: 'https://www.youtube.com/c/xavierlefevrefr',
            },
            {
              title: 'Dribbble',
              description: 'Not yet live',
              icon: 'dribbble',
              link: '',
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
              <h2 className="ui centered medium header">
                <div>
                  <i className={`huge ${v.icon} icon`}></i>
                </div>
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
