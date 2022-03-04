import React from "react";
import classes from "./summary.module.css";
// import CancelSave from "./cancelSave/CancelSave.jsx";
import Image from "./Image/Image.jsx";
import Name from "./name/Name";
import Summarycategory from "./Summarycategory/Summarycategory";
import Note from "./note/Note";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CancelSave from './CancelSave/cancelSave';

const Summary = ({ closeCart }) => {
  return (
    <div className={classes.Summary}>

      <div className={classes.button} onClick={() => closeCart(false)}><KeyboardBackspaceIcon sx={{ fontSize: 15 }} />
        <p>back</p>
        {/* <button className={classes.button}> back</button> */}
      </div>
      <Image />
      <Name />
      <Summarycategory />
      <Note />
      <CancelSave />
    </div>
  );
};

export default Summary;
