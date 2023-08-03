import React,{useState} from "react";
import "./ExerciseOutputtingConditional.css"
// don't change the Component name "App"
export default function ExerciseOutputtingConditional() {
  const [mainDelete, setMainDelete] = useState(true);
  return (
    <div>
      {mainDelete ? null : (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
                  <button
                      id="alertBtn"
            onClick={() => {
              setMainDelete(true);
            }}
          >
            Proceed
          </button>
        </div>
      )}
      <button
        onClick={() => {
          setMainDelete(false);
        }}
      >
        Delete
      </button>
    </div>
  );
}
