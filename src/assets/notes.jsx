import React from "react";
import "./CSS/notes.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Note(props) {
  function deletee() {
    props.funct(props.id);
  }

  return (
    <div>
      <div className="note">
        <h4 className="note-h">{props.head} </h4>
        <p className="note-p">{props.para} </p>
        <button className="buttonn" onClick={deletee}>
          <CheckCircleOutlineIcon />
        </button>
      </div>
    </div>
  );
}
