import React from "react";
import classes from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconContainer from "./IconContainer";
import P from "../UI/p/P";

export default function Footer() {
  return (
    <div
      className={classes.footer}
      style={{
        height: "60vh",
        width: "100%",
        background: "black",
        color: "white",
      }}
    >
      <div className={classes.column1}>
        <div className={classes.icons}>
          <div
            style={{
              height: "20%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              fontSize: "1.5em",
              marginLeft: "1rem",
            }}
          >
            Joy of Life
          </div>
          <div
            className={classes.iconContainer}
            style={{
              marginTop: "2rem",
            }}
          >
            <IconContainer>
              <FacebookIcon style={{ color: "#1DA1F2" }}></FacebookIcon>
            </IconContainer>
            <IconContainer>
              <PhoneEnabledIcon style={{ color: "#075e54" }}></PhoneEnabledIcon>
            </IconContainer>
            <IconContainer>
              <TwitterIcon style={{ color: "#00ACEE" }}></TwitterIcon>
            </IconContainer>
            <IconContainer>
              <InstagramIcon style={{ color: "#E4405F" }}></InstagramIcon>
            </IconContainer>
          </div>
        </div>
        <div className={classes.ministries1}>
          <div
            style={{
              height: "20%",

              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              fontSize: "1.5em",
            }}
          >
            Bible Study Groups
          </div>
          <div className={classes.content} style={{ marginTop: "2rem" }}>
            <ul>
              <li>
                <h3>Couples</h3>
                <h6>Every first Saturday of the month</h6>
                <h6>Contact Joseph and Michelle</h6>
              </li>
              <li>
                <h3>ELEOS</h3>
                <h6>Every second Saturday of the month</h6>
                <h6>Contact Joseph and Michelle</h6>
              </li>
              <li>
                <h3>Endurance by Faith @Coolaroo</h3>
                <h6>Saturday - fortnightly @7pm</h6>
                <h6>Contact Sarah</h6>
              </li>
              <li>
                <h3>Broady / Craigie / Greenvale</h3>
                <h6>Sunday - fortnightly @7pm</h6>
                <h6>Contact Nomer</h6>
              </li>
              <li>
                <h3>Golden Life Bible Study</h3>
                <h6>Sunday - @8pm</h6>
                <h6>Contact Gloria</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.ministries2}>
          {" "}
          <div
            style={{
              height: "20%",

              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              fontSize: "1.5em",
            }}
          ></div>
          <div className={classes.content} style={{ marginTop: "2rem" }}>
            {" "}
            <ul>
              <li>
                <h3>Men's Bible Study</h3>
                <h6>Every 3rd Sunday of the month</h6>
                <h6>Contact Sam</h6>
              </li>
              <li>
                <h3>Young Couples</h3>
                <h6>Every month</h6>
                <h6>Contact Neil and Brenda</h6>
              </li>
              <li>
                <h3>JOL Youth</h3>
                <h6>Friday - fortnightly </h6>
                <h6>Contact Sarena</h6>
              </li>
              <li>
                <h3>Craigieburn Highlands</h3>
                <h6>Fortnightly - Monthly</h6>
                <h6>Contact Liezel</h6>
              </li>
              <li>
                <h3>Young Adults</h3>
                <h6>Tuesday - Fortnightly</h6>
                <h6>Contact Kath</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.column2}>EMAIL</div>
    </div>
  );
}
