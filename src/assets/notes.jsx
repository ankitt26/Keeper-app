import React from "react";

import "./style.css";
export default function Note() {
  return (
    <div>
      <div className="note">
        <h4 className="note-h" contentEditable="True" autoCorrect="false">
          Heading
        </h4>
        <p className="note-p" contentEditable="True" autoCorrect="false">
          Notes
        </p>
      </div>
    </div>
  );
}
