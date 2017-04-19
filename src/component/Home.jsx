import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data
    }
  }
  render() {
    return (
      <article className="content introduction noscroll" id="chapterintroduction">
        <div className="inner">
          <h2>
            <span>HEllo, I'm</span><br/>
            {this.state.name}
          </h2>
          <span className="title">{this.state.title}</span>
        </div>
        <div id="owl-demo" className="owl-carousel">
          {
            this.state.images.map((image, index) => <div key={index} className="item"><img src={image}/></div>)
          }
        </div>
      </article>
    );
  }
}

export default Home;
