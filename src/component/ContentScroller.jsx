import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Introduction from './Introduction';

class ContentScroller extends Component {
  render() {
    const {
      home,
      about,
      skills,
      experience,
      education,
      portfolio,
      contact,
      lang
    } = this.props.data;
    return (
      <div className="content-scroller">
        <div className="content-wrapper">
          <Home data={home} lang={lang}></Home>
          <About data={about} lang={lang}></About>
          <Skills data={skills} lang={lang}></Skills>
          <Experience data={experience} lang={lang}></Experience>
          <Education data={education} lang={lang}></Education>
          <Portfolio data={portfolio} lang={lang}></Portfolio>
          <Contact data={contact} lang={lang}></Contact>
          <Introduction></Introduction>
        </div>
      </div>
    );
  }
}

export default ContentScroller;
