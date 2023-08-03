import React,{useState} from 'react'

const ExerciseDynamicStyles = () => {
    const [styleMe, setStyleMe] = useState("") //boolean
    const changeStyle = () => {
        setStyleMe(!styleMe)
    }
  return (
    <div>
      <p style={{color:(styleMe ? "red" : "black")}}>Style me!</p>
      <button onClick={changeStyle}>Toggle style</button>
    </div>
  );
}

export default ExerciseDynamicStyles