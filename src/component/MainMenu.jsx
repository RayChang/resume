'use strict';
import React, { Component } from 'react';

class MainMenu extends Component {
  render() {
    const { lang, setLang } = this.props;
    return (
      <aside className="menu" id="menu">
        <div className="logo">
          <img src="images/logo.jpg" width="140" height="140" alt=""/>
          <span>Ray Chang</span>
        </div>
        <a href="#menu1" className="menu-link"></a>
        <nav id="menu1" role="navigation">
          <a href="#chapterintroduction">
            <span id="link_introduction" className="active">Home</span>
          </a>
          <a href="#chapterabout">
            <span id="link_about">About</span>
          </a>
          <a href="#chapterskills">
            <span id="link_skills">Skills</span>
          </a>
          <a href="#chapterexperience">
            <span id="link_experience">Experience</span>
          </a>
          <a href="#chaptereducation">
            <span id="link_education">Education</span>
          </a>
          <a href="#chapterportfolio">
            <span id="link_portfolio">Portfolio</span>
          </a>
          <a href="#chaptercontact">
            <span id="link_contact">Contact</span>
          </a>
        </nav>
        <div className="social">
          <span className={(() => lang === 'zh-TW' ? 'active' : '')()} onClick={() => setLang('zh-TW')}>中文</span>
          <span className={(() => lang === 'en' ? 'active' : '')()} onClick={() => setLang('en')}>English</span>
        </div>
      </aside>
    )
  };
}


export default MainMenu;
