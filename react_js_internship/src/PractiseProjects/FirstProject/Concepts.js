import React from "react";

const Concepts = ({ concepts }) => {

  return (
    <>
      <ul id="concepts">
        {concepts.map((value, index) => {
          return (
             <li className="concept" key={index}>
              <img src={value.image} alt={value.title} />
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Concepts;
