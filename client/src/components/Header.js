import React from "react";
import "./Header.css";
import backButton from "../assets/images/back.png";
import nextButton from "../assets/images/next.png";

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <div className="back-button">
          <img src={backButton} alt="Previous Page" />
        </div>
        <div className="title">{title}</div>
        <div className="forward-button">
          <img src={nextButton} alt="Next Page" />
        </div>
      </div>
    );
  }
}

export default Header;
