import React from "react";
import workout1 from "../assets/workout1.jpg";

const Workout1 = () => {
  const test =
    "Welcome to my workout blog! I have been trying to workout on a regular bases for almost a year now and I finally decided that it would be cool to visually see and document my progression as the years go on.";

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm shadow p-3 mb-5 bg-light rounded border">
          {/* copy this img tag if needed */}
          <img src={workout1} alt="welcome" className="img-fluid"></img>
          <div className="mt-5"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm">
                {/* place content within this div */}
                <div className="text-center">
                  <h1>Workout Blog #1</h1>
                  <p className="text-muted">March 21, 2020</p>
                </div>
                <div className="mt-5"></div>
                <hr className="my-7"></hr>
                <div className="mt-5"></div>
                <div>
                  <p>{test}</p>
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

export default Workout1;
