import React from "react";
import classes from "./style.module.css";

const  Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.close();
      }}
    />
  );
};

export default Backdrop;