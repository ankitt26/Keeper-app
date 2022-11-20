import React from "react";
import "./style.css";

let year = new Date().getFullYear();
export default function Foot() {
  return (
    <div>
      <div className="foot">
        <h4 className="copy">
          <span id="cc">© </span>
          {year} Copyright
        </h4>
      </div>
    </div>
  );
}
