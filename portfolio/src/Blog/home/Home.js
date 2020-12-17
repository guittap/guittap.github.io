import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm">
          <NavLink to="/blog/pre-corona-workout">
          <h3>
            pre-corona workout
          </h3>
          <p className="text-muted">March 29, 2020</p>
          </NavLink>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Home;
