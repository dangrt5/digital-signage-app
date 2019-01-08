import React from "react";
import "./SingleLocation.css";
import EditButton from "../assets/images/edit.png";
import TrashButton from "../assets/images/trash.png";

class SingleLocation extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="individual-location">
        <div className="title">{title}</div>
        <div className="operations">
          <img src={TrashButton} alt="Delete" className="delete" />
          <img src={EditButton} alt="Update" className="update" />
        </div>
      </div>
    );
  }
}

export default SingleLocation;
