import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Locations from "./Locations";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Locations} />
        </Switch>
      </div>
    );
  }
}

export default App;
