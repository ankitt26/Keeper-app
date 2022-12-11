import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./CSS/input.css";

import Fab from "@mui/material/Fab";
// or
// import { Fab } from "@mui/material";

import Zoom from "@mui/material/Zoom";
// or
// import { Zoom } from "@mui/material";

export default function Inpu(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [namee, setnamee] = useState({
    head: "",
    para: "",
  });

  //////////oncahnge //////////////////////////////////////////////////////////////////////

  const onchange = (event) => {
    const { name, value } = event.target;
    setnamee((prevnamee) => {
      return { ...prevnamee, [name]: value };
    });
    // console.log(namee);
  };

  /////////onclick ////////////////////////////////////////////////////////////////////////

  function submitNote(event) {
    props.onAdd(namee);
    setnamee({
      head: "",
      para: "",
    });
    event.preventDefault();
  }

  //////// return ////////////////////////////////////////////////////////////////////

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="form">
      <form>
        {isExpanded && (
          <input
            type="text"
            name="head"
            className="head-input"
            placeholder="heading here...."
            onChange={onchange}
            value={namee.head}
          ></input>
        )}
        <textarea
          type="text"
          onClick={expand}
          name="para"
          className="head-input"
          placeholder="para...."
          onChange={onchange}
          value={namee.para}
          rows={isExpanded ? 3 : 1}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab className="head-btn" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
