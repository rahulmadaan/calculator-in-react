import React from "react";
import ReactDOM from "react-dom";
// import css from "../public/style.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Hour: 0, minute: 0, second: 0, miliSecond: 0 };
  }

  tick() {
    this.setState(state => ({
      miliSecond: state.miliSecond + 1
    }));
  }

  incrementSecond() {
    this.setState(state => ({
      second: state.second + 1
    }));
    if (this.state.second > 60) {
      this.setState(state => ({ second: 0 }));
      this.incrementMinute();
    }
  }

  updateHour() {
    this.setState(state => ({
      hour: state.hour + 1
    }));
  }

  incrementMinute() {
    this.setState(state => ({
      minute: state.minute + 1
    }));
    if (this.state.minute > 60) {
      this.updateHour();
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.incrementSecond(), 1000);
  }

  clearInterval() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Hour : {this.state.Hour}
        Minute : {this.state.minute}
        Seconds : {this.state.second}
        Milisecond : {this.state.miliSecond}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById("root"));
