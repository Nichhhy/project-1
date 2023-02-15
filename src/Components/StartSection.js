import React from "react";

export default class StartSection extends React.Component {
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
      <div className="w-4/6 h-4/6 flex items-center justify-center flex-col p-5 text-white">
        <div className="fira text-left w-full text-xl">Today is : </div>
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
