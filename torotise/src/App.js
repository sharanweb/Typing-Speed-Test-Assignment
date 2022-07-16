import { useEffect, useRef, useState } from "react";
import { Layout } from "./Components/layout";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(0);
  const [userInput, setUserInput] = useState("");
  const timerRef = useRef(null);
  const [hasGameEnded, setHasGameEnded] = useState(false);
  const [record, setRecord] = useState(0);

  let prev_record = localStorage.getItem("score_record");
  // setRecord(prev_record);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleReset = () => {
    setTimer(0);
    setUserInput("");
    setHasGameEnded(false)
    timerRef.current = clearInterval(timerRef.current);
  };

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    const randomInt = randomIntFromInterval(65, 90);
    const newVal = String.fromCharCode(randomInt);
    setValue(newVal);
  }, [userInput]);


  useEffect(() => {
    if (userInput.trim()) {
      setRecord(prev_record);
      if (userInput.length !== 20 && !hasGameEnded) {
        startTimer();
        const latestInput = userInput[userInput.length - 1]?.toUpperCase();
        if (latestInput !== value) {
          setTimer((prev) => prev + 0.5);
        }
      } else {
        // console.log(prev_record);
        
        if(timer < prev_record){
          localStorage.removeItem("score_record");
          localStorage.setItem("score_record", timer);
          setRecord(timer);
        }
        timerRef.current = clearInterval(timerRef.current);
        if(timer > prev_record){
          setValue("GAME OVER");
        }else{
          setValue("Success");
        }
        
        setHasGameEnded(true);
      }
    }
  }, [userInput]);

  return (
    <div className="App">
      <Layout
        userInput={userInput}
        setUserInput={setUserInput}
        value={value}
        timer={timer}
        handleReset={handleReset}
        recorddata = {prev_record>0 ? prev_record : 0}
      />
    </div>
  );
}

