import React from "react";
import "./css/Button.css";

export default function Button(props) {
  //custom handle click for each button type
  function handleClick() {
    if (props.buttonType === "Start") {
      props.setStatus("Pomodoro");
    }
    if (props.buttonType === "Stop") {
      props.setRounds(0);
      props.setStatus("Stopped");
    }
    if (props.buttonType === "Skip") {
      if (props.status === "Pomodoro") {
        props.setRounds(props.rounds + 1);
        if ((props.rounds + 1) % props.LBInterval === 0) {
          props.setStatus("LongBreak");
        } else {
          props.setStatus("ShortBreak");
        }
      } else if (props.status === "ShortBreak") {
        props.setStatus("Pomodoro");
      } else if (props.status === "LongBreak") {
        props.setStatus("Pomodoro");
      }
    }
  }
  //render button component
  return (
    <button
      type="button"
      className={"btn " + props.buttonType}
      onClick={handleClick}
    >
      {props.buttonType}
    </button>
  );
}
