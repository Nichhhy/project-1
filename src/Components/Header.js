import React from "react";

export default class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (status) => {
    this.props.updatePage(status);
  };

  render() {
    return (
      <header className="w-full h-[10%] bg-grey m-0 flex justify-center sticky top-0 z-50">
        <div
          className="w-full max-w-[1400px] flex justify-center
        "
        >
          <button
            className="headerDiv text-xl"
            onClick={() => this.handleClick("Schedule")}
          >
            Schedule
          </button>
          <button
            className="headerDiv text-xl"
            onClick={() => this.handleClick("Things to do")}
          >
            Things to do
          </button>
          <button
            className="headerLogo "
            onClick={() => this.handleClick("Things to do")}
          >
            GET TO WORK
          </button>
          <button
            className="headerDiv text-xl"
            onClick={() => this.handleClick("Outstanding")}
          >
            Outstanding
          </button>
          <button
            className="headerDiv text-xl"
            onClick={() => this.handleClick("Clear all")}
          >
            Clear all
          </button>
        </div>
      </header>
    );
  }
}
