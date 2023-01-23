import { useSelector } from "react-redux";


function Review() {
  // access state from reduxStore w/ useSelector
  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comments = useSelector(store => store.comments);

  const handlePost = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments
      }
    }).then((response) => {
      console.log('something posted:', response);
    }).catch((err) => {
      console.error('handleSubmit fail:', err)
    })
  }

  return (
    <>
      <h1>Review Your Feedback</h1>
        <form onSubmit={handlePost}>
          <p>Feeling: {feeling}</p>
          <p>Understanding: {understanding}</p>
          <p>Support: {support}</p>
          <p>Comments: {comments}</p>
          <button type="submit">Submit</button>
        </form>
    </>
  )
}


export default Review;