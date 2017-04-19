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
  constructor(props) {
    super(props);
  };

  render() {
    const {
      home,
      about,
      skills,
      experience,
      education,
      portfolio,
      contact
    } = this.props.data;
    return (
      <div className="content-scroller">
        <div className="content-wrapper">
          <Home data={home}></Home>
          <About data={about}></About>
          <Skills data={skills}></Skills>
          <Experience data={experience}></Experience>
          <Education data={education}></Education>
          <Portfolio data={portfolio}></Portfolio>
          <Contact data={contact}></Contact>
          <Introduction></Introduction>
        </div>
      </div>
    );
  }
}

export default ContentScroller;
