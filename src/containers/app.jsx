import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as TodoActions from '../actions';

import MainMenu from '../component/MainMenu.jsx';
import ToTop from '../component/ToTop.jsx';
import ContentScroller from '../component/ContentScroller.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  };
  static propTypes = {
    home: React.PropTypes.object.isRequired,
    about: React.PropTypes.object.isRequired,
    skills: React.PropTypes.object.isRequired,
    experience: React.PropTypes.object.isRequired,
    education: React.PropTypes.object.isRequired,
    portfolio: React.PropTypes.object.isRequired,
    contact: React.PropTypes.object.isRequired
  };
  render() {
    return (
      <div id="container" className="container">
        <MainMenu></MainMenu>
        <ToTop></ToTop>
        <ContentScroller data={this.props}></ContentScroller>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(TodoActions, dispatch)
// })

export default connect(
  mapStateToProps
)(App)
