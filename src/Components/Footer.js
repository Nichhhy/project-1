import React from "react";

export default class FooterSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="w-full bg-grey h-1/10 m-0 flex justify-center fixed bottom-0">
        <div
          className="w-10/12 flex justify-center
        "
        >
          <div className="headerLogo ">GET TO WORK</div>
        </div>
      </footer>
    );
  }
}
