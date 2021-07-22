import React from "react";
import "./css/RoundCounter.css";

//render the RoundCounter component
export default function RoundCounter(props) {
  return (
    <div className="RoundCounter">
      <h3>Pomodoro rounds: {props.rounds}</h3>
    </div>
  );
}
