import { useState } from "react";
import { useDispatch } from "react-redux";


function Feeling() {
  const [feelingInput, setFeelingInput] = useState(0);
  const [understandingInput, setUnderstandingInput] = useState(0);
  const [supportInput, setSupportInput] = useState(0);
  const [commentInput, setCommentInput] = useState('');

  const dispatch = useDispatch();

  const handleDispatch = event => {
    event.preventDefault();

    // console.log(`dispatch feedback`, {
    //   feelingInput, understandingInput, supportInput, commentInput});

    dispatch({
      type: 'SET_FEEDBACKLIST',
      payload: {
        feeling: feelingInput,
        understanding: understandingInput,
        support: supportInput,
        comment: commentInput
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
        <button>Next</button>
      </form>
    </>
  )
}


export default Feeling;