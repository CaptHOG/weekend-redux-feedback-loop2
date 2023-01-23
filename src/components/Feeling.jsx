import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";


function Feeling() {
  const [feelingInput, setFeelingInput] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchFeeling = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FEELING',
      payload: feelingInput
    })
    history.push('/understanding');
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={dispatchFeeling}>
        <input 
          min="1"
          max="5"
          type="number"
          value={feelingInput}
          required="required"
          onChange={(event) => setFeelingInput(event.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </>
  )
}


export default Feeling;