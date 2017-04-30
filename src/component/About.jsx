import React, { Component } from 'react';

class About extends Component {
  render() {
    const { data, lang } = this.props;
    return (
      <article className="content about white-bg" id="chapterabout">
        <div className="inner">
          <h2>About</h2>
          <div className="title-divider"></div>
          <div className="about-con">
            <ul>
              <li>Name: {data.name}</li>
              <li>Email: <a href="mailto:{data.email}">{data.email}</a></li>
              <li>Phone: {data.phone}</li>
            </ul>
            <h3>Professional Profile</h3>
            <p dangerouslySetInnerHTML={{__html: data.introuction[lang]}}></p>
            <a href={data.cv[lang]} className="button" download>Download resume as PDF format</a>
          </div>
        </div>
      </article>
    );
  }
}

export default About;
