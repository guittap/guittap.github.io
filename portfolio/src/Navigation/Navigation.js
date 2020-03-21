import React from "react";
import Me from "./js/Me";
import NameAndScope from "./js/NameAndScope";
import NavBar from "./js/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends React.Component {
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

export default Navigation;
