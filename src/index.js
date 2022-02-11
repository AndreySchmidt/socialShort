import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './modules/app/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './configStore'
import reportWebVitals from './reportWebVitals'
import initialState from './initialStateMock'

// const store = configStore()
const store = configStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
