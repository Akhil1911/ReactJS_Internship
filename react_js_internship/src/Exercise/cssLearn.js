import React from 'react'
import "./cssLearn.css"
const CssLearn = () => {
    return (
      <>
        <div className="mainDiv">
          <div className="simpleClass">Simple class</div>
          <div id="simpleId">simple id</div>
          <div className="inputNamedClass">input named class</div>
        </div>
        <div className="parentDiv">
            .className input<input className="childDiv"></input>
        </div>
        <div className="parentDiv2">
          .className .className<input className="input2"></input>
        </div>
      </>
    );
}

export default CssLearn