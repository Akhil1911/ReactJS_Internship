import React from 'react'
import ExerciseRenderingListShow from "./ExerciseRenderingListShow";
import "./ExerciseRenderingList.css";

const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

const ExerciseRenderingList = () => {
   return (
     <ul>
       {DUMMY_TODOS.map((value) => {
         return <ExerciseRenderingListShow text={value} />;
       })}
     </ul>
   );
}

export default ExerciseRenderingList