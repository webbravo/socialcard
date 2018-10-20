import React, { Component } from "react";
import "./App.css";
import Desc from "./desc";
import Photo from "./photo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper shadow">
          <Photo />
          <Desc />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
