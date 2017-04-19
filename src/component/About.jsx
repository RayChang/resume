import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data
    }
  }
  render() {
    return (
      <article className="content about white-bg" id="chapterabout">
        <div className="inner">
          <h2>About</h2>
          <div className="title-divider"></div>
          <div className="about-con">
            <ul>
              <li>Name: {this.state.name}</li>
              <li>Email: <a href="mailto:{this.state.email}">{this.state.email}</a></li>
              <li>Phone: {this.state.phone}</li>
            </ul>
            <h3>Professional Profile</h3>
            <p dangerouslySetInnerHTML={{__html: this.state.introuction}}></p>
            <a href={this.state.cv} className="button">Download resume as PDF format</a>
          </div>
        </div>
      </article>
    );
  }
}

export default About;
