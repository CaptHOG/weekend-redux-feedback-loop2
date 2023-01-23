import { useState } from "react";
import { useDispatch } from "react-redux";


function Support() {
  const [supportInput, setSupportInput] = useState('');

  const dispatch = useDispatch();

  const dispatchSupport = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_SUPPORT',
      payload: supportInput
    })
  }

  return (
    <>
      <h2>How well are you being supported?</h2>
        <form onSubmit={dispatchSupport}>
          <input 
            required="required"
            type="number"
            value={supportInput}
            onChange={(event) => setSupportInput(event.target.value)}
          />
          <button type="submit">Next</button>
        </form>
    </>
  )
}


export default Support;