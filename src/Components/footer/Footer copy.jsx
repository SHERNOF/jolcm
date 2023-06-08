import React from "react";
import Section from "../common/section/Section";
import classes from "./footer.module.css";
import FooterContainer from "./FooterContainer";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconContainer from "./IconContainer";

export default function Footer() {
  return (
    <Section>
      <div
        className={classes.footer}
        style={{
          height: "60vh",
          width: "100%",
          background: "black",
          color: "white",
        }}
      >
        <div className={classes.contact}>
          <FooterContainer>
            <div
              style={{
                height: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Reach Us
            </div>
            <div
              style={{
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <IconContainer style={{ marginLeft: "1rem" }}>
                <FacebookIcon
                  style={{
                    fontSize: "1.5rem",
                    color: "#3b5998",
                  }}
                ></FacebookIcon>
              </IconContainer>

              <IconContainer>
                <TwitterIcon
                  style={{ fontSize: "1.5rem", color: "#1DA1F2" }}
                ></TwitterIcon>
              </IconContainer>
              <IconContainer>
                <InstagramIcon
                  style={{ fontSize: "1.5rem", color: "#FD1D1D" }}
                ></InstagramIcon>
              </IconContainer>
              <IconContainer style={{ marginRight: "-1rem" }}>
                <PhoneEnabledIcon
                  style={{ fontSize: "1.5rem" }}
                ></PhoneEnabledIcon>
              </IconContainer>
            </div>
          </FooterContainer>
        </div>
        <div className={classes.ministries}>
          <FooterContainer>
            {" "}
            <div
              style={{
                height: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              MINISTRIES
            </div>
          </FooterContainer>
        </div>

        <div className={classes.email}>Email Us</div>
      </div>
    </Section>
  );
}
