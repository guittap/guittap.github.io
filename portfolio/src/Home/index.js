import React from "react";
import Me from "./js/me";
import NameAndScope from "./js/nameandscope";
import NavBar from "./js/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Me />
        <NameAndScope />
        <NavBar />
      </div>
    );
  }
}

export default Home;
