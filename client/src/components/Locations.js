import React from "react";
import Header from "./Header";
import SingleLocation from "./SingleLocation";
import { connect } from "react-redux";
import { getLocations } from "../actions/index";

class Locations extends React.Component {
  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    console.log("props before mounting", this.props);
    return (
      <div className="locations">
        <Header title="Locations" />
        <div className="location-list">
          <SingleLocation title="Irvine, CA" />
          <SingleLocation title="Kentucky, TN" />
          <SingleLocation title="Georgia, TN" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.list.results
  };
}

export default connect(
  mapStateToProps,
  { getLocations }
)(Locations);
