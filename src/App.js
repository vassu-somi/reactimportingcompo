import React from "react";
import Heading from "./components/Heading";
import InputQuery from "./components/InputQuery";
import SubHeading from "./components/SubHeading";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Home</h1>

      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  );
}
