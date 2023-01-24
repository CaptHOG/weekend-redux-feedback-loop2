import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Understanding() {
  const [understandingInput, setUnderstandingInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchUnderstanding = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: understandingInput
    })
    history.push('/support');
  }

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <p>low 1 - 5 high</p>
        <form onSubmit={dispatchUnderstanding}>
          <input 
            required="required"
            type="number"
            value={understandingInput}
            onChange={(event) => setUnderstandingInput(event.target.value)}
          />
          <button>Next</button>
        </form>
    </>
  )
}


export default Understanding;