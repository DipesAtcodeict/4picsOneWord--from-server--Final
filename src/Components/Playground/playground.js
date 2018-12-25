import React from "react";
import "./playground.css";

const Playground = props => {
  return (
    <div>
      <div className="container">
        <div>
          <img src={`images/${props.image1}`} className="images" alt="pic" />
          <img src={`images/${props.image2}`} className="images" alt="pic" />
          <img src={`images/${props.image3}`} className="images" alt="pic" />
          <img src={`images/${props.image4}`} className="images" alt="pic" />
        </div>
        <input
          className="input"
          placeholder={`guess the ${props.answer.length} letter word`}
          onChange={props.renderNext}
        />
      </div>
    </div>
  );
};

export default Playground;
