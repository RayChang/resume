import React, { Component } from 'react';

class Home extends Component {
  render() {
    const { name, title, images } = this.props.data;
    return (
      <article className="content introduction noscroll" id="chapterintroduction">
        <div className="inner">
          <h2>
            <span>HEllo, I'm</span><br/>
            {name}
          </h2>
          <span className="title">{title}</span>
        </div>
        <div id="owl-demo" className="owl-carousel">
          {
            images.map((image, index) => <div key={index} className="item"><img src={image}/></div>)
          }
        </div>
      </article>
    );
  }
}

export default Home;
