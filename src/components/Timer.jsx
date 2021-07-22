import React, { useState, useEffect } from "react";
import intToSeconds from "../logic/intToSeconds";

export default function Timer(props) {
  //seconds displayed
  const [seconds, setSeconds] = useState(props.time * 60);

  //setSeconds after each second
  useEffect(() => {
    if (seconds === 0 && props.status === "Pomodoro") {
      props.setRounds(props.rounds + 1);
      if ((props.rounds + 1) % props.LBInterval === 0)
        props.setStatus("LongBreak");
      else props.setStatus("ShortBreak");
    } else if (seconds === 0 && props.status === "ShortBreak")
      props.setStatus("Pomodoro");
    else if (seconds === 0 && props.status === "LongBreak")
      props.setStatus("Pomodoro");

    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  });

  //render the Timer
  return (
    <div>
      <h1>
        {Math.floor(seconds / 60)}:
        {intToSeconds(seconds - Math.floor(seconds / 60) * 60)}
      </h1>
    </div>
  );
}
