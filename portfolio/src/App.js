import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Coding from "./Coding/Coding";
import Workout from "./Workout/Workout";
import Navigation from "./Navigation/Navigation";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/coding-blog" component={Coding} />
            <Route path="/workout-blog" component={Workout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
