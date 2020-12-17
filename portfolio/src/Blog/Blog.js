import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import Workout1 from "./posts/workout1";

class Blog extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="mt-4">
          <Switch>
            <Route path="/blog" component={Home} exact />
            <Route path="/blog/pre-corona-workout" component={Workout1} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Blog;
