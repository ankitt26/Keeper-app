import React from "react";

import "./CSS/footer.css";

let year = new Date().getFullYear();
export default function Foot() {
  return (
    <div className="footer">
      <h4 className="copy"> ©️ {year} Copyright</h4>
    </div>
  );
}
