import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Comments() {
  const [commentInput, setCommentInput] = useState('');

  const dispatch = useDispatch();

  const dispatchComments = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENTS',
      payload: commentInput
    })
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
          <Link to='/review'><button type="submit">Next</button></Link>
        </form>
    </>
  )
}


export default Comments;