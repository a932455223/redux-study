import React from 'react';
import { render } from 'react-dom';
import App from './container/App';
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(reducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
