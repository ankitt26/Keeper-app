import React, { useState } from "react";
import Head from "./assets/header";
import Inpu from "./assets/input";
import Note from "./assets/notes";
import Foot from "./assets/footer";
import "./assets/CSS/style.css";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function Deletee(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Head name="Keeper" />
      <Inpu onAdd={addNote} />
      {notes.map((value, index) => {
        return (
          <Note
            key={index}
            head={value.head}
            para={value.para}
            id={index}
            funct={Deletee}
          />
        );
      })}

      {/* <Foot /> */}
    </div>
  );
}

export default App;
