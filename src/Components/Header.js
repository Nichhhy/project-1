import React from "react";

export default class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (status) => {
    this.props.updatePage(status);
  };
  clearLocalStorage = (status) => {
    this.props.updatePage(status);
    localStorage.clear();
  };

  render() {
    return (
      <header className="w-full bg-grey m-0 flex flex-col justify-center sticky top-0 z-50">
        <div className="w-full">
          <div
            className="w-full max-w-[1400px] flex justify-center
        "
          >
            <button
              className="headerDiv text-xl md:hidden"
              onClick={() => this.handleClick("Schedule")}
            >
              Schedule
            </button>
            <button
              className="headerDiv text-xl md:hidden"
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
              className="headerDiv text-xl md:hidden"
              onClick={() => this.handleClick("Outstanding")}
            >
              Outstanding
            </button>
            <button
              className="headerDiv text-xl md:hidden"
              onClick={() => this.clearLocalStorage("clear")}
            >
              Clear all
            </button>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between px-[30px]">
          <button
            className="headerDivMobile text-m "
            onClick={() => this.handleClick("Schedule")}
          >
            Schedule
          </button>
          <button
            className="headerDivMobile text-m"
            onClick={() => this.handleClick("Things to do")}
          >
            Things to do
          </button>

          <button
            className="headerDivMobile text-m"
            onClick={() => this.handleClick("Outstanding")}
          >
            Outstanding
          </button>
          <button
            className="headerDivMobile text-m"
            onClick={() => this.clearLocalStorage("clear")}
          >
            Clear all
          </button>
        </div>
      </header>
    );
  }
}
