import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';


const feedbackList = (state=[], action) => {
  switch (action.type) {
    case 'SET_FEEDBACKLIST':
      return [...state, action.payload];
    default: {
      return state;
    }
  }
}

const feeling = (state=0, action) => {
  switch (action.type) {
    case 'ADD_FEELING': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const understanding = (state=0, action) => {
  switch (action.type) {
    case 'ADD_UNDERSTANDING': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const support = (state=0, action) => {
  switch (action.type) {
    case 'ADD_SUPPORT': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const comments = (state='', action) => {
  switch (action.type) {
    case 'ADD_COMMENTS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const reduxStore = createStore(
  combineReducers({
    feedbackList,
    feeling,
    understanding,
    support,
    comments
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
