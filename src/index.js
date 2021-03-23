import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import { Provider } from 'react-redux';
import store from './state/store/configureStore'

axios.defaults.baseURL = 'http://localhost:3000/api'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
