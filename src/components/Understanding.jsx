import { useState } from "react";
import { useDispatch } from "react-redux";


function Understanding() {
  const [understandingInput, setUnderstandingInput] = useState('');

  const dispatch = useDispatch();

  const dispatchUnderstanding = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: understandingInput
    })
  }

  return (
    <>
      <h2>How well are you understanding the content?</h2>
        <form onSubmit={dispatchUnderstanding}>
          <input 
            required="required"
            type="number"
            value={understandingInput}
            onChange={(event) => setUnderstandingInput(event.target.value)}
          />
          <button type="submit">Next</button>
        </form>
    </>
  )
}


export default Understanding;