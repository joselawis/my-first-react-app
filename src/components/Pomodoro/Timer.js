import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      alert: {
        type: "",
        message: "",
      },
      duration: 0,
      time: 0,
    };

    this.times = {
      defaultTime: 1500, // 25 min
      shortBreak: 300, // 5 min
      longBreak: 900, // 15 min
    };
  }

  componentDidMount() {
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    this.setState({
      time: this.times.defaultTime,
    });
  };

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: "work",
        message: "Working!",
      },
      duration: this.times.defaultTime,
    });

    return this.setTime(this.times.defaultTime);
  };

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: "shortBreak",
        message: "Taking a Short Break!",
      },
      duration: this.times.shortBreak,
    });

    return this.setTime(this.times.shortBreak);
  };

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: "longBreak",
        message: "Taking a Long Break!",
      },
      duration: this.times.longBreak,
    });

    return this.setTime(this.times.longBreak);
  };

  setTime = (newTime) => {
    this.restartInterval();

    this.setState({
      time: newTime,
    });
  };

  restartInterval = () => {
    clearInterval(this.interval);

    this.interval = setInterval(this.countDown, 1000);
  };

  countDown = () => {
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: "buz",
          message: "Buzzzzzzzz!",
        },
      });
    } else {
      this.setState({
        time: this.state.time - 1,
      });
    }
  };

  displayTimer(seconds) {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }

  timerPlay = () => {
    this.setTime(this.state.time);
  };

  timerPause = () => {
    clearInterval(this.interval);
  };

  timerReset = () => {
    this.setTime(this.state.duration);
  };

  render() {
    const {
      alert: { message, type },
      time,
    } = this.state;
    return (
      <div className="Pomodoro">
        <div className={`alert ${type}`}>{message}</div>
        <div className="timer">{this.displayTimer(time)}</div>
        <div className="control">
          <button className="play" onClick={this.timerPlay}>
            Play
          </button>
          <button className="play" onClick={this.timerPause}>
            Pause
          </button>
          <button className="play" onClick={this.timerReset}>
            Reset
          </button>
        </div>
        <div className="types">
          <button className="start" onClick={this.setTimeForWork}>
            Start Working
          </button>
          <button className="short" onClick={this.setTimeForShortBreak}>
            Short Break
          </button>
          <button className="long" onClick={this.setTimeForLongBreak}>
            Long Break
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
