import React, { useState, useEffect } from "react";
import "./css/Settings.css";

export default function Settings(props) {
  //formStatus controls the Settings form
  //false= not disabled & true=disabled
  const [formStatus, setFormStatus] = useState(false);

  //set formStatus depending on the Timer status
  useEffect(() => {
    if (props.status === "Stopped") {
      setFormStatus(false);
      document.getElementById("FormSettings").style.opacity = 1.0;
    } else {
      setFormStatus(true);
      document.getElementById("FormSettings").style.opacity = 0.5;
    }
  }, [props.status]);

  function changePomodoro(event) {
    props.setPomodoroTime(event.target.value);
  }

  function changeSBT(event) {
    props.setSBT(event.target.value);
  }

  function changeLBT(event) {
    props.setLBT(event.target.value);
  }

  function changeLBI(event) {
    props.setLBInterval(event.target.value);
  }

  function resetSettings() {
    props.setPomodoroTime(25);
    props.setSBT(5);
    props.setLBT(15);
    props.setLBInterval(4);
  }
  //render the Settings form component
  return (
    <div id="FormSettings">
      <h5>Settings</h5>
      <hr />
      <form>
        <h6>Time(minutes)</h6>
        <label htmlFor="PomodoroTime" className="form-label">
          Pomodoro
        </label>
        <br />
        <input
          type="number"
          className="form-number quantity"
          min="1"
          max="60"
          id="PomodoroTime"
          onChange={changePomodoro}
          value={props.pomodoroTime}
          disabled={formStatus}
        />
        <br />
        <label htmlFor="ShortBreakTime" className="form-label">
          Short Break
        </label>
        <br />
        <input
          type="number"
          className="form-number"
          min="1"
          max="60"
          id="ShortBreakTime"
          onChange={changeSBT}
          value={props.SBT}
          disabled={formStatus}
        />
        <br />
        <label htmlFor="LongBreakTime" className="form-label">
          Long Break
        </label>
        <br />
        <input
          type="number"
          className="form-number"
          min="1"
          max="60"
          id="LongBreakTime"
          onChange={changeLBT}
          value={props.LBT}
          disabled={formStatus}
        />
        <br />
        <hr />
        <h6>Long Break Interval</h6>
        <label htmlFor="LBI" className="form-label">
          Rounds
        </label>
        <br />
        <input
          type="number"
          className="form-number"
          min="1"
          max="10"
          id="LBI"
          onChange={changeLBI}
          value={props.LBInterval}
          disabled={formStatus}
        />
        <button
          type="button"
          className="btn btn-danger btn-reset"
          onClick={resetSettings}
          disabled={formStatus}
        >
          Reset defaults
        </button>
      </form>
    </div>
  );
}
