import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


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
        <Link to='/understanding'><button type="submit">Next</button></Link>
      </form>
    </>
  )
}


export default Feeling;