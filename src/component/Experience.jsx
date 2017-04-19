import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data
    }
  }
  render() {
    return (
      <article className="content experience white-bg" id="chapterexperience">
        <div className="inner">
          <h2>Experience</h2>
          <div className="title-divider"></div>
          <h3>{this.state.years} Years Experience!</h3>
          <p dangerouslySetInnerHTML={{__html: this.state.depiction}}></p>
          <div className="experience-con">
            <div className="container-sub">
              <div className="full-divider"></div>
              <div className="row">
                {
                  this.state.jobs.map((item, index) => (
                    <div key={index} className="experience-details col-12">
                      <div className="col-6 row margin-bottom50 margin-top50">
                        <div className="col-4">
                          <img src={item.image} />
                        </div>
                        <div className="col-8">
                          <h5>{item.title}</h5>
                          <h4>{item.name}</h4>
                          <span>{item.range}</span>
                        </div>
                      </div>
                      <div className="col-6 margin-bottom50 margin-top50 no-margin-top">{item.depiction}</div>
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

export default Experience;
