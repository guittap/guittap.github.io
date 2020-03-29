import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import Navigation from "./Navigation/Navigation";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
