import React from "react";
import me from "./me.png";
import "./index.css";
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

class Me extends React.Component {
  render() {
    return (
      <div className="MeDiv container mt-4">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm text-center">
            <img
              src={me}
              alt="Wargen Guittap"
              className="img-fluid border rounded-circle"
              height="auto"
              width="67%"
            ></img>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

class NameAndScope extends React.Component {
  render() {
    return (
      <div className="NameAndScopeDiv container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-10 text-center mt-2">
            <h1>Wargen Guittap</h1>
          </div>
          <div className="col-sm"></div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-10 text-center text-muted lead mt-2">
            <h5>Software Engineer // Business Analyst</h5>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBarDiv container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-10 text-center mt-2">
            <a href="resume.pdf" target="_blank">
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
            <button type="button" class="btn btn-outline-primary m-2">
              Coding Blog
            </button>
            <button type="button" class="btn btn-outline-primary m-2">
              Workout Blog
            </button>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default Home;
