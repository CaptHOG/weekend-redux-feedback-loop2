import { useSelector } from "react-redux";
import axios from "axios";


function Review() {
  // access state from reduxStore w/ useSelector
  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comments = useSelector(store => store.comments);

  const handlePost = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling,
        understanding,
        support,
        comments
      }
    }).then((response) => {
      console.log('response:', response);
    }).catch((err) => {
      console.error('handleSubmit fail:', err)
    })
  }

  return (
    <>
      <h1>Review Your Feedback</h1>
      <p>Feeling: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={handlePost}>Submit</button>
    </>
  )
}


export default Review;