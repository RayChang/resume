import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data
    }
  }
  render() {
    return (
      <article className="content education gray-bg" id="chaptereducation">
        <div className="inner">
          <h2>Education</h2>
          <div className="title-divider"></div>
          <div className="education-con">
            <div className="container-sub">
              <div className="full-divider"></div>
              <div className="row">
                {
                  this.state.schools.map((school, index) => (
                  <div key={index} className="education-details">
                    <div className="col-12 margin-bottom50 margin-top50">
                      <div className="flot-left">
                        <h5>{school.department}</h5>
                        <h4>{school.name}</h4>
                        <span>{school.range}</span> </div>
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

export default Education;
