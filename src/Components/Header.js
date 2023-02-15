import React from "react";

export default class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="w-full bg-grey m-0 flex justify-center fixed top-0">
        <div
          className="w-10/12 flex justify-center
        "
        >
          <div className="headerDiv text-xl">Schedule</div>
          <div className="headerDiv text-xl">Things to do</div>
          <div className="headerLogo ">GET TO WORK</div>
          <div className="headerDiv text-xl">Outstanding</div>
          <div className="headerDiv text-xl">Clear all</div>
        </div>
      </header>
    );
  }
}
