import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [feelingInput, setFeelingInput] = useState('');
  const [understandingInput, setUnderstandingInput] = useState('');

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

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding feedback`, {feelingInput});

    dispatch({
      type: 'SET_FEEDBACKLIST',
      payload: {
        feeling: feelingInput
      }
    })

    // axios({
    //   method: 'POST',
    //   url: '/feedback',
    //   data: {
    //     feeling: feelingInput
    //   }
    // }).then((response) => {
    //   // Call the fetchFeedback function, which is going to
    //   // GET /feedback, then update the feedbackList reducer:
    //   fetchFeedback();
    // }).catch((err) => {
    //   console.error('handleSubmit fail:', err)
    // })
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* Feeling Page */}
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <input 
          required="required"
          type="number"
          value={feelingInput}
          onChange={(event) => setFeelingInput(event.target.value)}
        />
        <button type="submit">Next</button>
      </form>

      {/* Understanding Page */}
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <input 
          required="required"
          type="number"
          value={understandingInput}
          onChange={(event) => setUnderstandingInput(event.target.value)}
        />
        <button type="submit">Next</button>
      </form>

      {/* Last Page */}
    </div>
  );
}


export default App;