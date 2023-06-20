import React from "react";
import classes from "./style.module.css";
import clsx from "clsx";
import CloseIcon from "@mui/icons-material/Close";
const SlideDrawer = (props) => {
  const links = [
    "Study Abroad",
    "Accomodation",
    "Test Prep",
    "Finance",
    "Community",
    "Products",
    "More ",
  ];
  return props.show ? (
    <div className={clsx(classes.sidedrawer, props.show && classes.open)}>
      <div
        className={classes.closeIcon}
        onClick={() => {
          props.close();
        }}
      >
        <CloseIcon />
      </div>
      <ul className={classes.rightPart}>
        {links.map((each, _idx) => {
          return <li key={_idx}>{each}</li>;
        })}
      </ul>
    </div>
  ) : null;
};

export default SlideDrawer;
