import React,{useState} from 'react'
import "./ExerciseUpdatindStateCounter.css";
const ExerciseUpdatindStateCounter = () => {
     const [counter, setCounter] = useState(0);
     const incrementCounter = () => {
       setCounter((prevCount) => prevCount+1);
     };
  return (
    <>
      <div>
        <p id="counter">{counter}</p>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    </>
  );
}

export default ExerciseUpdatindStateCounter