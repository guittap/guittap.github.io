import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBarDiv container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-10 text-center mt-2">
            <a href="resume.pdf">
              <button type="button" class="btn btn-outline-primary m-2">
                Resume
              </button>
            </a>
            <button
              type="button"
              class="btn btn-outline-primary m-2"
              onClick={() => window.open("https://github.com/guittap")}
            >
              Github
            </button>
            <a href="coding.html">
              <button type="button" class="btn btn-outline-primary m-2">
                Coding Blog
              </button>
            </a>
            <a href="workout.html">
              <button type="button" class="btn btn-outline-primary m-2">
                Workout Blog
              </button>
            </a>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
