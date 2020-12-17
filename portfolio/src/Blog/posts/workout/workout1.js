import React from "react";
import workout1 from "../../assets/workout1.jpg";
import ReactMarkdown from "react-markdown";
import Workout1Text from "../../markdown/workout1.md";
import "../../../css/style.css";

class Workout1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sub: null };
  }

  componentWillMount() {
    fetch(Workout1Text)
      .then(response => response.text())
      .then(text => {
        this.setState({ sub: text });
      });
  }

  render() {
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
                <div className="col-sm-2"></div>
                <div className="col-sm">
                  {/* place content within this div */}
                  <div className="text-center">
                    <h1>
                      Workout Blog #1
                      <span role="img" aria-label="Flexed Bicep">
                        💪
                      </span>
                    </h1>
                    <p className="text-muted">March 29, 2020</p>
                  </div>
                  <hr className="my-7 mt-5"></hr>

                  {/* place submission here */}
                  <div className="mt-5 mb-5 line-height-md">
                    <ReactMarkdown
                      source={this.state.sub}
                      className="table blockquote"
                      escapeHtml={false}
                    />
                  </div>

                  {/* end of content */}
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default Workout1;
