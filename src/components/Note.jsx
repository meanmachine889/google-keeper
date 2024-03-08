import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import Fab from '@mui/material/Fab';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}><RemoveIcon/></Fab>
    </div>
  );
}

export default Note;
