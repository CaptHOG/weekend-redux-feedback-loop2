import { useState } from "react";
import { useDispatch } from "react-redux";


function Feeling() {
  const [feelingInput, setFeelingInput] = useState('');
  // const [understandingInput, setUnderstandingInput] = useState('');
  // const [supportInput, setSupportInput] = useState('');
  // const [commentInput, setCommentInput] = useState('');

  const dispatch = useDispatch();

  const handleDispatch = event => {
    event.preventDefault();

    dispatch({
      type: 'ADD_FEEDBACK',
      payload: {
        feeling: feelingInput,
        // understanding: understandingInput,
        // support: supportInput,
        // comments: commentInput
      }
    })
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleDispatch}>
        <input 
          required="required"
          type="number"
          value={feelingInput}
          onChange={(event) => setFeelingInput(event.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </>
  )
}


export default Feeling;