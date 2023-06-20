import classes from "./style.module.css";
import logo from "./../../assets/logo.svg";

import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import SlideDrawer from "../SideDrawer/SideDrawer";
import clsx from "clsx";
const Navbar = () => {
  const links = [
    "Study Abroad",
    "Accomodation",
    "Test Prep",
    "Finance",
    "Community",
    "Products",
    "More ",
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setDrawerOpen((prev) => !prev);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  let backdrop;

  if (drawerOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.nav}>
        <span>
          <img src={logo} />
        </span>
        <ul className={classes.rightPart}>
          {links.map((each, _idx) => {
            return <li key={_idx}>{each}</li>;
          })}
        </ul>
        <div className={classes.iconsPart}>
          <div className={classes.icon}>
            <SearchIcon />
          </div>
          <div className={classes.icon}>
            <LocalPhoneIcon />
          </div>
          <div className={classes.personIcon}>
            <PersonIcon />
          </div>
        </div>
        <div
          className={clsx(classes.icon, classes.toggleBtn)}
          onClick={() => {
            drawerToggleClickHandler();
          }}
        >
          <MenuIcon />
        </div>
      </div>
      <SlideDrawer show={drawerOpen} close={backdropClickHandler} />
      {backdrop}
    </div>
  );
};

export default Navbar;
