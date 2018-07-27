import React, { Component } from "react";
import { render } from "react-dom";
import PostContainer from "./containers/PostsContainer";

class App extends Component {
  render() {
      return (
        <div>
            <PostContainer />
        </div>
      )
   
  }
}
render(<App />, document.querySelector("#app"));
