import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"

import styled from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  //dev mode
  module.hot.accept();
} else {
  // production mode
}
