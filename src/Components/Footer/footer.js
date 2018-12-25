import React from "react";
import "./footer.css";

const Footer = props => {
  return (
    <div>
      <h1 className="score">Score: {props.score}</h1>
    </div>
  );
};

export default Footer;
