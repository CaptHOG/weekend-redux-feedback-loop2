import { useHistory } from "react-router-dom";


function ThankYou() {
  const history = useHistory();

  const handleStartOver = (event) => {
    event.preventDefault();
    history.push('/');
  }

  return (
    <>
      <h1>Thank You!</h1>
      <button onClick={handleStartOver}>Leave New Feedback</button>
    </>
  )
}


export default ThankYou;