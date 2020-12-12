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
          <small>Software Engineer, Data Analyst</small>
        </div>
        <div className="col-sm"></div>
      </div>
      <div className="row mb-4"></div>

    {/* paragraph about myself */}
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>A bachelor of science in computer science from @UNLV.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>Currently working as a business process analyst @MSTS, I analyze and visualize data relating to supply chain operations using Python. I was also in charge of the design and creation of a SharePoint knowledge base for our end-users.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>Other than programming, I have been in love with indoor bouldering and posting videos of my progress on Instagram.</p>
        </div>
        <div className="col-sm"></div>
      </div>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <p>I am interested in content creation and post videos/ stream games on my YouTube and Twitch.</p>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default NameAndScope;
