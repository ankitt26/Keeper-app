import React from "react";
import "./CSS/header.css";
export default function Head(props) {
  return (
    <>
      <nav className="nav">
        <h1 className="he">{props.name}</h1>
      </nav>
    </>
  );
}
