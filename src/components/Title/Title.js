import React from "react";
import "./Title.css";

const Title = props => (
    <div className="cont">
    <h1 className="title">{props.children}</h1>
    <p className="score">Score: { props.score } of 12 | Top Score: { props.topScore }</p>
    <p className="message">{ props.message }</p>
</div>
);

export default Title;
