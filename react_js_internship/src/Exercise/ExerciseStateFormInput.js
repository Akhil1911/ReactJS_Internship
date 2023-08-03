import React,{useState} from 'react'
import "./ExerciseStateFormInput.css"

const ExerciseStateFormInput = () => {
  const [validateMessaage, setValidateMessaage] = useState("Invalid");
  const validateMessaageHandler = (e) => {
    if (e.target.value.trim().length < 3) {
      setValidateMessaage("Invalid");
    } else {
      setValidateMessaage("Valid");
    }
  };
  return (
    <>
      <form>
        <label>Your message</label>
        <input type="text" onChange={validateMessaageHandler} />
        <p>{validateMessaage} message</p>
      </form>
    </>
  );
}

export default ExerciseStateFormInput