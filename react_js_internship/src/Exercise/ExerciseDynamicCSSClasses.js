import React, { useState } from "react";
import "./ExerciseDynamicCSSClasses.css"
const ExerciseDynamicCSSClasses = () => {
    const [classes, setclasses] = useState(false)
    const handler = () => {
        setclasses(!classes)
    }
  return (
    <>
      <div className={classes ? "class1" : ""} >Style Me!</div>
      <button onClick={handler}>Toggle Me</button>
    </>
  );
};

export default ExerciseDynamicCSSClasses;