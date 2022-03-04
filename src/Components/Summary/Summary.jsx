import React from "react";
import classes from "./summary.module.css";
// import CancelSave from "./cancelSave/CancelSave.jsx";
import Image from "./Image/Image.jsx";
import Name from "./name/Name";
import Summarycategory from "./Summarycategory/Summarycategory";
import Note from "./note/Note";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Summary = () => {
  return (
    <div className={classes.Summary}>
      <div className={classes.button}><KeyboardBackspaceIcon sx={{fontSize:15}}/>
       <p >back</p>
       {/* <button className={classes.button}> back</button> */}
       </div>
      <Image />
      <Name />
      <Summarycategory/>
      <Note/>
    </div>
  );
};

export default Summary;
