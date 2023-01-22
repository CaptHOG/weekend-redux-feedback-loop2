import { useState } from "react";


function Feeling({ handleDispatch }) {
  const [feelingInput, setFeelingInput] = useState(0);

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