import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import CountDown from "./components/CountDown";
import StatusNotification from "./components/StatusNotification";
import RoundCounter from "./components/RoundCounter";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

function App() {
  //set States using Hooks
  const [status, setStatus] = useState("Stopped"); //status of the timer(Pomodoro, Short Break, Long Break, Stopped, Finished)
  const [pomodoroTime, setPomodoroTime] = useState(25); //pomodoro working time
  const [SBT, setSBT] = useState(5); //Short Break time
  const [LBT, setLBT] = useState(15); //Long Break time
  const [LBInterval, setLBInterval] = useState(4); //Long Break interval
  const [rounds, setRounds] = useState(0); //round counter

  //Alert using a bell sound on each status change !=Stopped
  useEffect(() => {
    if (status !== "Stopped") {
      const sound = new Audio("/media/BellSound.mp3");
      sound.play();
    }
  }, [status]);

  //render the App header, body, footer
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12">
            <StatusNotification status={status} />
            <CountDown
              status={status}
              setStatus={setStatus}
              pomodoroTime={pomodoroTime}
              SBT={SBT}
              LBT={LBT}
              LBInterval={LBInterval}
              rounds={rounds}
              setRounds={setRounds}
            />
            <RoundCounter rounds={rounds} />
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <Settings
              status={status}
              pomodoroTime={pomodoroTime}
              setPomodoroTime={setPomodoroTime}
              SBT={SBT}
              setSBT={setSBT}
              LBT={LBT}
              setLBT={setLBT}
              LBInterval={LBInterval}
              setLBInterval={setLBInterval}
            />
          </div>
        </div>
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
