import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling.jsx';
import Understanding from '../Understanding.jsx';
import Support from '../Support.jsx';
import Comments from '../Comments.jsx';
import Review from '../Review.jsx';
import ThankYou from '../ThankYou.jsx';


function App() {
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

        {/* Comments Page */}
        <Route exact path='/comments'>
          <Comments />
        </Route>

        {/* Review Page */}
        <Route exact path='/review'>
          <Review />
        </Route>

        {/* Thank You Page */}
        <Route exact path='/thankYou'>
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}


export default App;