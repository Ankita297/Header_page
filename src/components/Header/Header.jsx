import classes from "./style.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import disneyLogo from "./../../assets/disney.webp";
import clsx from "clsx";
import Amazon from "./../../assets/amazon.png";
import { imgFiles } from "../../imgConstant";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Header = () => {
  const [activeImg, setActiveImg] = useState(-1);

  return (
    <div className={classes.header}>
      <div className={classes.firstPart}>
        <p className={classes.heading}>FIRST IN THE FAMILY</p>
        <p className={classes.para}>
          They are global citizens of tomorrow. Start your abroad journey today.
        </p>
        <div className={classes.liveOn}>
          <OpenInNewIcon /> Live On
          <img
            src={disneyLogo}
            alt="logo"
            width="45px"
            height="45px"
            style={{ borderRadius: "8px", marginLeft: "16px" }}
          />
        </div>
        <button className={classes.btn}>Get Your Shortlist for FREE</button>
        <button className={clsx(classes.btn, classes.expertBtn)}>
          Talk to an Expert
        </button>
        <p className={classes.paraTagLine}>
          95% of out students get admit in less than 4 weeks
        </p>
        <div className={classes.officeIntro}>
          <p className={clsx(classes.paraTagLine)}>
            Our student finished university to work at global offices of:
          </p>
          <div className={classes.companyLogos}>
            {[1, 2, 3, 4].map((each, _idx) => {
              return (
                <div>
                  <img
                    src={Amazon}
                    alt={"logo"}
                    width="70px"
                    style={{ borderRadius: "12px", margin: "0px 12px 0px 0px" }}
                  />
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>

      <div className={classes.secondPart}>
        <div class={classes.containerWrapper}>
          {imgFiles.map((each, _idx) => {
            return (
              <div
                className={clsx(
                  classes.panel,
                  activeImg === _idx && classes.active
                )}
                key={_idx}
                onClick={() => {
                  setActiveImg(_idx);
                }}
                style={{
                  backgroundImage: `url(${each})`,
                }}
              >
                <h3>Some Random Pics</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.ImgSection}>
        {imgFiles.map((each, _idx) => {
          return <img src={each} key={_idx} className={classes.eachImg} />;
        })}
      </div>

      <div className={classes.whatsAppIcon}>
        <WhatsAppIcon />
      </div>
    </div>
  );
};

export default Header;
