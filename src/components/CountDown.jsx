import React from "react";
import "./css/CountDown.css";
import Button from "./Button";
import Timer from "./Timer";

export default function CountDown(props) {
  //render the countdown component depending on the Timer status
  return (
    <div className={"Timer " + props.status}>
      {props.status === "Pomodoro" && (
        <Timer
          status={props.status}
          setStatus={props.setStatus}
          LBInterval={props.LBInterval}
          time={props.pomodoroTime}
          rounds={props.rounds}
          setRounds={props.setRounds}
        />
      )}
      {props.status === "Stopped" && (
        <div>
          <h1>{props.pomodoroTime}:00</h1>
        </div>
      )}
      {props.status === "ShortBreak" && (
        <Timer
          status={props.status}
          setStatus={props.setStatus}
          LBInterval={props.LBInterval}
          time={props.SBT}
          rounds={props.rounds}
          setRounds={props.setRounds}
        />
      )}
      {props.status === "LongBreak" && (
        <Timer
          status={props.status}
          setStatus={props.setStatus}
          LBInterval={props.LBInterval}
          time={props.LBT}
          rounds={props.rounds}
          setRounds={props.setRounds}
        />
      )}

      {props.status === "Stopped" && (
        <div>
          <Button
            buttonType="Start"
            status={props.status}
            setStatus={props.setStatus}
          />
        </div>
      )}
      {props.status !== "Stopped" && (
        <div>
          <Button
            buttonType="Stop"
            status={props.status}
            setStatus={props.setStatus}
            setRounds={props.setRounds}
          />
          <Button
            buttonType="Skip"
            status={props.status}
            setStatus={props.setStatus}
            LBInterval={props.LBInterval}
            rounds={props.rounds}
            setRounds={props.setRounds}
          />
        </div>
      )}
    </div>
  );
}
