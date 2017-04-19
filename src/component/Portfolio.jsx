import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data
    };
  }
  slideImage(cover, length) {
    let index = cover.indexOf('.'),
        slide = [];
    for(let i = 1; i <=length; i++) {
      var name = cover.slice(0, index) + '-' + i + cover.slice(index);
      slide[i - 1] = <div key={cover.slice(0, index) + i} className="item"><img src={name} alt="" /></div>
    }
    return slide;
  }
  linkIcon(link) {
    if(link) {
      return <i className="fa fa-external-link" style={{fontSize: '12px',verticalAlign: 'top', marginLeft: '10px'}} aria-hidden="true"></i>
    }
  }
  render() {
    return (
      <article className="content portfolio white-bg" id="chapterportfolio">
        <div className="inner">
          <h2>Portfolio</h2>
          <div className="title-divider"></div>
          <div className="portfolio-con">
            <div className="container-sub margin-top50">
              <div className="row">
                <div id="grid-gallery" className="grid-gallery">
                  <section className="grid-wrap">
                    <ul className="grid">
                      {
                        this.state.protfolios.map((protfolio, index) => (
                          <li key={index}>
                            <figure>
                              <img src={protfolio.cover} alt=""/>
                              <figcaption>
                                <div className="figcaption-details">
                                  <img src="images/icon-plus.png" height="82" width="82" alt="" />
                                  <h3>{protfolio.name}</h3>
                                  <span>{protfolio.info}</span>
                                </div>
                              </figcaption>
                            </figure>
                          </li>
                        ))
                      }
                    </ul>
                  </section>

                  <section className="slideshow">
                    <ul>
                      {
                        this.state.protfolios.map((protfolio, index) => (
                          <li key={index}>
                            <figure>
                              <figcaption>
                                <h3>
                                  <a href={protfolio.link} target="_blank">
                                    {protfolio.name}
                                    {this.linkIcon(protfolio.link)}
                                  </a>
                                </h3>
                                <span>{protfolio.info}</span>
                                <p>{protfolio.depiction}</p>
                              </figcaption>
                              <div id={"owl-demo" + (index + 1)} className="owl-carousel">
                                {this.slideImage(protfolio.cover, protfolio.slideImage)}
                              </div>
                            </figure>
                          </li>
                        ))
                      }
                    </ul>
                    <nav> <span className="fa nav-prev"></span> <span className="fa nav-next"></span> <span className="fa nav-close"></span> </nav>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Portfolio;
