import { StrictMode } from "react";
import ReactDOM from "react-dom";

import UsingGlobalContext from "./UsingGlobalContext";
import UsingLocalContext from "./UsingLocalContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UsingLocalContext />
    <UsingGlobalContext />
  </StrictMode>,
  rootElement
);
