import React from "react";

const NameAndScope = () => {
  return (
    <div className="NameAndScopeDiv container">

      {/* name */}
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-10 text-center mt-2">
          <h1 className="display-5">Wargen Guittap</h1>
        </div>
        <div className="col-sm"></div>
      </div>

    {/* my specialties */}
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-10 text-center text-muted">
          <p>Software Engineer, Data Analyst</p>
        </div>
        <div className="col-sm"></div>
      </div>
      <div className="row mb-3"></div>

    {/* paragraph about myself */}
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>A bachelor of science in computer science from <a href="https://www.unlv.edu/">@UNLV</a> and a huge nerd for frontend design.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>Currently working as a business process analyst <a href="https://www.nnss.gov/pages/NFO/WorkingForMSTS.html">@MSTS</a>, I analyze and visualize data relating to supply chain operations using Python. I was also in charge of the design and creation of a SharePoint knowledge base for our end-users.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>Other than programming, I have been in love with indoor bouldering and posting videos of my progress on <a href="https://www.instagram.com/woregin/?hl=en">Instagram</a>.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>I am interested in content creation and post videos/stream games on my <a href="https://www.youtube.com/user/GotAwkward">YouTube</a> and <a href="https://www.twitch.tv/woregin">Twitch</a>.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      {/* line break thing */}
      <div className="row mt-3 mb-3">
        <div className="col-sm"></div>
        <div className="col-sm-3">
          <hr/>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>Check out my projects on <a href="https://github.com/guittap">Github</a>. I can also be reached through my <a href="https://twitter.com/WGuittap">Twitter</a>, <a href="https://www.linkedin.com/in/guittap">LinkedIn</a>, and <a href="mailto:wargenng@gmail.com">wargenng@gmail.com</a>.</p>
        </div>
        <div className="col-sm"></div>
      </div>

    </div>
  );
};

export default NameAndScope;
