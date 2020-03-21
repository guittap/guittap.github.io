import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBarDiv container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-10 text-center mt-2">
          {/* home button */}
          <NavLink to="/">
            <button type="button" class="btn btn-outline-primary m-2">
              Home
            </button>
          </NavLink>
          {/* resume button */}
          <a href="resume.pdf">
            <button type="button" class="btn btn-outline-primary m-2">
              Resume
            </button>
          </a>
          {/* github button */}
          <button
            type="button"
            class="btn btn-outline-primary m-2"
            onClick={() => window.open("https://github.com/guittap")}
          >
            Github
          </button>
          {/* coding blog button */}
          <NavLink to="/coding-blog">
            <button type="button" class="btn btn-outline-primary m-2">
              Coding Blog
            </button>
          </NavLink>
          {/* workout blog button */}
          <NavLink to="/workout-blog">
            <button type="button" class="btn btn-outline-primary m-2">
              Workout Blog
            </button>
          </NavLink>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default NavBar;
