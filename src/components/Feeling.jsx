import { useState } from "react";
import { useDispatch } from "react-redux";


function Feeling() {
  const [feelingInput, setFeelingInput] = useState('');

  const dispatch = useDispatch();

  const dispatchFeeling = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FEELING',
      payload: feelingInput
    })
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={dispatchFeeling}>
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