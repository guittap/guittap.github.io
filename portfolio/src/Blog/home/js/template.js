import React from "react";
import workout1 from "../../assets/workout1.jpg";
import { NavLink } from "react-router-dom";

const Workout1 = () => {
  const summaryText =
    "Welcome to my workout blog! I have been trying to workout on a regular basis for almost a year now and I finally decided to document my progression.";
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm shadow p-3 mb-5 bg-light rounded border">
          {/* copy this img tag if needed */}
          <NavLink to="/blog/workout-1">
            <img src={workout1} alt="welcome" className="img-fluid"></img>
          </NavLink>
          <div className="mt-5"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm">
                {/* place content within this div */}

                {/* title of the article */}
                <div className="text-center">
                  <NavLink to="/blog/workout-1">
                    <h1>
                      Workout Blog #1{" "}
                      <span role="img" aria-label="Flexed Bicep">
                        💪
                      </span>
                    </h1>
                  </NavLink>
                  <p className="text-muted">March 21, 2020</p>
                </div>

                {/* the summary of the article */}
                <div className="mt-5">
                  <p className="text-center">{summaryText}</p>
                </div>

                {/* read more */}
                <div className="m-5 text-center">
                  <NavLink to="/blog/workout-1">
                    <p>
                      Read More{" "}
                      <span role="img" aria-label="right arrow">
                        ➡️
                      </span>
                    </p>
                  </NavLink>
                </div>

                {/* end of content */}
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default template;
