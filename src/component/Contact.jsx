import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <article className="content contact gray-bg" id="chaptercontact">
        <div className="inner">
          <h2>Contact</h2>
          <div className="title-divider"></div>
          <h3>Let's Keep In Touch</h3>
          <div className="full-divider"></div>
          <div className="contact-con margin-top50">
            <div className="container-sub">
              <div className="row">
                <div className="contact-form">
                  <h3>Drop Me a Line</h3>
                  <form id="form1" name="form1" method="post" action="/contact" >
                    <input name="name" type="text" id="name" placeholder="Your Name..." />
                    <input name="email" type="text" id="email" placeholder="Your Email..." />
                    <textarea name="message" id="message" cols="45" rows="5" placeholder="Your Message..."></textarea>
                    <div className="g-recaptcha margin-top20" data-sitekey="6Lcsdx0UAAAAAFn4fKtmpoo-j-YX0iB5BHPXT5zI"></div>
                    <input type="submit" name="button" id="button" value="say hello!" />
                    <div id="successmsg" ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Contact;
