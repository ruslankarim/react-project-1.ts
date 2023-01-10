import React from "react";
import { render } from "react-dom";
import "./index.css";
import Button from "./Button";
import Container from "./Container";
import Link from "./Link";
import Input from "./Input";

function App() {
  return (
    <>
    <Container>
      <Link href="https://www.guidedao.xyz/solidity"/>
      <Button type="button" disabled>Button</Button>
      <Input
      placeholder="Type something here"
      name="input"
      type="text"
      ></Input>
    </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));
