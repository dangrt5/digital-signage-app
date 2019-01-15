import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Locations from "./Locations";
import Rooms from "./Rooms";
import Boards from "./Boards";
import Panels from "./Panels";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Locations} />
          <Route path="/rooms/:id" component={Rooms} />
          <Route path="/boards/:id" component={Boards} />
          <Route path="/panels/:id" component={Panels} />
        </Switch>
      </div>
    );
  }
}

export default App;
