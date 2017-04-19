import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data
    }
  }
  render() {
    return (
      <article className="content skills gray-bg" id="chapterskills">
        <div className="inner">
          <h2>Skills</h2>
          <div className="title-divider"></div>
          <h3>Just My Skills</h3>
          <p>{this.state.skills.depiction}</p>
          <div className="skills-con">
            <div className="container-sub margin-top50">
              <div className="row">
                {
                  this.state.skills.lists.map((skill, index) => (
                    <div key={index} className="col-6 margin-bottom50">
                      <div className="col-6">
                        <span className="chart" data-percent={skill.percentage}>
                          <span className="percent"></span>
                        </span>
                      </div>
                      <div className="col-6 chart-text">
                        <h4 dangerouslySetInnerHTML={{__html: skill.name}}></h4>
                        <p>Expert, {skill.years} years</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="full-divider"></div>
            <div className="container-sub skill-list">
              <div className="row">
                <h3>Knowledge</h3>
                <p>{this.state.knowledge.depiction}</p>
                <div>
                  <ul>
                    {
                      this.state.knowledge.lists.map((item, index) => (<li key={index} className="col-4">{item}</li>))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-divider"></div>
            <div className="container-sub">
              <div className="row">
                <h3>Language Skills</h3>
                <p>{this.state.language.depiction}</p>
                {
                  this.state.language.lists.map((item, index) => (
                    <div key={index} className="progressbar-main margin-top50">
                      <div className="progress-bar-description">{item.name}</div>
                      <div className="progress" data-percentage={item.percentage}>
                        <div className="progress-value"></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Skills;
