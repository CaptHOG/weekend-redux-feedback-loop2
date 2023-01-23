import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling.jsx';
import Understanding from '../Understanding.jsx';
import Support from '../Support.jsx';
import Comments from '../Comments.jsx';
import Review from '../Review.jsx';
import ThankYou from '../ThankYou.jsx';


function App() {
  // useSelector: this is the hook we use to GET or READ
  // data from the Redux store.
  const feedbackList = useSelector(store => store.feedbackList);

  const dispatch = useDispatch();

  // useEffect: so each time this component mounts
  // on the DOM, it will fire off the GET /feedback
  // request
  useEffect(() => {
    fetchFeedback();
  }, [])

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('GET /feedback:')
      console.table(response.data);
      // Now we need to send the array of objects to
      // our reducer:
      dispatch({
        type: 'SET_FEEDBACKLIST',
        payload: response.data // 👈 this is array of objects
      })
    }).catch((err) => {
      console.error('feedbackList useEffect fail:', err)
    })
  }

  const handlePost = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: feelingInput,
        understanding: understandingInput,
        support: supportInput,
        comments: commentInput
      }
    }).then((response) => {
      // Call the fetchFeedback function, which is going to
      // GET /feedback, then update the feedbackList reducer:
      fetchFeedback();
    }).catch((err) => {
      console.error('handleSubmit fail:', err)
    })
  }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        {/* Feeling Page */}
        <Route exact path='/'>
          <Feeling />
        </Route>

        {/* Understanding Page */}
        <Route exact path='/understanding'>
          <Understanding />
        </Route>

        {/* Support Page */}
        <Route exact path='/support'>
          <Support />
        </Route>

        {/* Comment Page */}
        <Route exact path='/comments'>
          <Comments />
        </Route>

        {/* Review Page */}
        <Route exact path='/review'>
          <Review />
        </Route>

        {/* Thank You Page */}
        <Route>
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}


export default App;