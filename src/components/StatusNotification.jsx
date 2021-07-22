import React from "react";

export default function StatusNotification(props) {
  //render the message to be displayed according to the Timer status
  if (props.status === "Stopped") {
    return (
      <div>
        <h1 className="p-4">Start your session</h1>
      </div>
    );
  } else if (props.status === "Pomodoro") {
    return (
      <div>
        <h1 className="p-4">Focus</h1>
      </div>
    );
  } else if (props.status === "ShortBreak") {
    return (
      <div>
        <h1 className="p-4">Take a short break</h1>
      </div>
    );
  } else if (props.status === "LongBreak") {
    return (
      <div>
        <h1 className="p-4">Take a long break</h1>
      </div>
    );
  }
}
