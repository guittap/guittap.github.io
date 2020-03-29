import React from "react";
import Welcome from "./posts/welcome";

class Blog extends React.Component {
  render() {
    return (
      <div className="mt-4">
        <Welcome />
      </div>
    );
  }
}

export default Blog;
