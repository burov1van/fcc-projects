import { useRef, useState } from "react";
import "./Timer.css";


export default function Timer() {
  const [time, setTime] = useState(null);
  const intervalRef = useRef(null);
  const [now, setNow] = useState(null);
  const resumeTimeRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    resumeTimeRef.current = now;
  };
  
    const handleResume = () => {
  setTime(Date.now());

    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);    
  };


  let timePassed = (time - now) / 1000;
  return (
    <div className="timer-wrapper">
      <h1 className="timer-title">Stopwatch in React</h1>
      <h2 className="timer-timer">Stopwatch:{timePassed.toFixed(3)}</h2>
      <div className="timer-btn-wrapper">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
}
