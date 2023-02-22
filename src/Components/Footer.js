import React from "react";

export default class FooterSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="w-full bg-grey h-[10%] m-0  justify-center sticky bottom-0">
        <div className=" flex justify-center">
          <div className="headerLogo ">GET TO WORK</div>
        </div>
      </footer>
    );
  }
}
