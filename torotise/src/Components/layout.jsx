import "./layout.css";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi, FaRegCircle } from "react-icons/fa";
import { BsBatteryFull } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";

export const Layout = ({
  value,
  timer,
  userInput,
  setUserInput,
  handleReset,
  recorddata
}) => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="time">
          <p className="clock">9:41</p>
        </div>
        <div className="battery">
          <GiNetworkBars className="network"></GiNetworkBars>
          <FaWifi className="wifi"></FaWifi>
          <BsBatteryFull className="cell"></BsBatteryFull>
        </div>
      </div>
      <div className="info">
        <h3 className="bigtext">Type The Alphabet</h3>
        <p className="smalltext">
          Typing game to see how fast you type. Timer starts when you do :)
        </p>
      </div>
      <div className="display">
        <p className="typed">{value}</p>
      </div>
      <div className="timer_record">
        <p className="current_timer">Time: {timer}</p>
        <p className="past_record">my best time: {recorddata}!</p>
      </div>
      <div className="input_div">
        <input
          className="inputbar"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type Here"
          autoFocus
        ></input>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
      <div className="footer">
        <MdArrowBackIos className="buttons"></MdArrowBackIos>
        <FaRegCircle className="buttons"></FaRegCircle>
        <BiSquareRounded className="buttons"></BiSquareRounded>
      </div>
    </div>
  );
};
