import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';


const feedbackList = (state=[], action) => {
  if (action.type === 'SET_FEEDBACKLIST') {
    return action.payload
  }
  return state
}

const reduxStore = createStore(
  combineReducers({
    feedbackList
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
