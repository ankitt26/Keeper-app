import React from "react";
import Head from "./header";
import Note from "./assets/notes";
import Foot from "./assets/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head />
      <Note />
      <Foot />
    </div>
  );
}

export default App;
