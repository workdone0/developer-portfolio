import React from "react";

import Home from "./components/home";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
          backgroundColor: "#000000",
        }}
      >
        <Home />
      </div>
    );
  }
}

export default App;
