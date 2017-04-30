'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import reducer from './reducers'

const store = createStore(reducer);
const root = document.getElementById('root');
store.dispatch({type: 'SET_LANG', lang: root.dataset.lang});
if(root) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
