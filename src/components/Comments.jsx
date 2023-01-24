import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Comments() {
  const [commentInput, setCommentInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchComments = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENTS',
      payload: commentInput
    })
    history.push('/review');
  }

  return (
    <>
      <h2>Any comments you want to leave?</h2>
        <form onSubmit={dispatchComments}>
          <input 
            required="required"
            type="text"
            value={commentInput}
            onChange={(event) => setCommentInput(event.target.value)}
          />
          <button>Next</button>
        </form>
    </>
  )
}


export default Comments;