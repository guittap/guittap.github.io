import React from "react";
import Resume from "./assets/resume.pdf";
import black from "./assets/black.png";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

class Navigation extends React.Component {
  render() {
    return (
      
    <div className="NavBarDiv container padding-top-low">
      <div className="row">
        <div className="col-sm">
          {/* home button */}
          <NavLink to="/">
          <img
            src={black}
            alt="logo"
            height="auto"
            width="40dp"
          ></img>
          </NavLink>

          {/* resume button */}
          <a href={Resume} className="menu-items text-secondary">Resume</a>

          {/* github button */}
          <a href="https://github.com/guittap" className="menu-items text-secondary">Github</a>

          {/* blog button */}
          <NavLink to="/blog" className="menu-items text-secondary">Blog</NavLink>
        </div>
      </div>
    </div>
    );
  }
}

export default Navigation;
