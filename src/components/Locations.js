import React from "react";
import Header from "./Header";
import SingleLocation from "./SingleLocation";

class Locations extends React.Component {
  render() {
    return (
      <div className="locations">
        <Header title="Locations" />
        <div className="location-list">
          <SingleLocation title="Irvine, CA" />
        </div>
      </div>
    );
  }
}

export default Locations;
