import { useSelector } from "react-redux";


function Review() {
  // access state from reduxStore w/ useSelector
  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comments = useSelector(store => store.comments);

  return (
    <>
      <h1>Review Your Feedback</h1>
        <form onSubmit={handlePost}>
          <p>Feeling: {feedbackList.feeling}</p>
          <p>Understanding: {feedbackList.understanding}</p>
          <p>Support: {feedbackList.support}</p>
          <p>Comments: {feedbackList.comment}</p>
          <button type="submit">Submit</button>
        </form>
    </>
  )
}


export default Review;