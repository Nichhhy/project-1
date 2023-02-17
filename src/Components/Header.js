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
      <header className="w-full bg-grey m-0 flex justify-center fixed top-0">
        <div
          className="w-10/12 flex justify-center
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
