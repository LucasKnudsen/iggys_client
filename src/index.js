import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import { Provider } from 'react-redux';
import store from './state/store/configureStore'
import { API_WS_ROOT } from './constants/index'
import { ActionCableProvider } from 'react-actioncable-provider';

axios.defaults.baseURL = 'http://localhost:3000/api'

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root')
);
