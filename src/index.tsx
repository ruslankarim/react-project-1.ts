import React from "react";
import { render } from "react-dom";
import "./index.css";
import Button from "./Button";

function App() {
  return (
    <>
      <Button type="button">sdf</Button>
    </>
  );
}

render(<App />, document.querySelector("#root"));
