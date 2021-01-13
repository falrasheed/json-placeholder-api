import React, {useState} from "react";
import Card from "./card";

function App() {
  return (
    <div className="app">
      <Card initial="i" name="John Doe" username="@johndoe" website="http:johndoe.io" />
      <Card initial="i" name="John Doe" username="@johndoe" website="http:johndoe.io" />
      <Card initial="i" name="John Doe" username="@johndoe" website="http:johndoe.io" />
    </div>
  );
}

export default App;
