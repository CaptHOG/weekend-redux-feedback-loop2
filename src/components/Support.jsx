import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Support() {
  const [supportInput, setSupportInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchSupport = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_SUPPORT',
      payload: supportInput
    })
    history.push('/comments')
  }

  return (
    <>
      <h2>How well are you being supported?</h2>
      <p>low 1 - 5 high</p>
        <form onSubmit={dispatchSupport}>
          <input 
            required="required"
            type="number"
            value={supportInput}
            onChange={(event) => setSupportInput(event.target.value)}
          />
          <button>Next</button>
        </form>
    </>
  )
}


export default Support;