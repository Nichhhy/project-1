import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="text-white">
        <div className="text-5xl py-8">
          {this.state.date.toDateString("en-us", {
            year: "numeric",
            month: "short",
          })}
        </div>
        <div className="text-3xl ">{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}
