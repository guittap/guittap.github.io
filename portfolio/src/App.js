import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import Navigation from "./Navigation/Navigation";
import ScrollToTop from "./js/ScrollToTop";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ScrollToTop />
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
