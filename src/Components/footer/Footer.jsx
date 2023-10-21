import React, { useRef, useState } from "react";
import classes from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Label from "../../UI/label/Label";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_js763ib",
        "template_wwgnrpj",
        form.current,
        "KX4fv-a94i59I1Ewy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setname("");
    setemail("");
    setphone("");
    setmessage("");
  };

  return (
    <div className={classes.footer}>
      <div className={classes.footerContents}>
        <div className={classes.firstColumn}>
          <div className={classes.footerColumnTitle}>Joy of Life</div>

          <div className={classes.iconContainer}>
            <div className={classes.iconHolder}>
              <FacebookIcon
                style={{ color: "#1DA1F2", fontSize: "1.2rem" }}
              ></FacebookIcon>
            </div>
            <div className={classes.iconHolder}>
              <PhoneEnabledIcon
                style={{ color: "#075e54", fontSize: "1.2rem" }}
              ></PhoneEnabledIcon>
            </div>
            <div className={classes.iconHolder}>
              <TwitterIcon
                style={{ color: "#00ACEE", fontSize: "1.2rem" }}
              ></TwitterIcon>
            </div>
            <div className={classes.iconHolder}>
              <InstagramIcon
                style={{ color: "#E4405F", fontSize: "1.2rem" }}
              ></InstagramIcon>
            </div>
          </div>
        </div>
        <div className={classes.secondColumn}>
          <div className={classes.footerColumnTitle}>Bible Study Groups</div>
          <div className={classes.secondColumnContent}>
            {/* <ul> */}
            <div className={classes.studyContainer}>
              <h3>Couples</h3>
              <div className={classes.pContainer}>
                <p>Every first Saturday of the month</p>
                <p>Contact Joseph and Michelle</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>ELEOS</h3>
              <div className={classes.pContainer}>
                <p>Every second Saturday of the month</p>
                <p>Contact Joseph and Michelle</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Endurance by Faith @Coolaroo</h3>
              <div className={classes.pContainer}>
                <p>Saturday - fortnightly @7pm</p>
                <p>Contact Sarah</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Broady / Craigie / Greenvale</h3>
              <div className={classes.pContainer}>
                <p>Sunday - fortnightly @7pm</p>
                <p>Contact Nomer</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Golden Life Bible Study</h3>
              <div className={classes.pContainer}>
                <p>Sunday - @8pm</p>
                <p>Contact Gloria</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Men's Bible Study</h3>
              <div className={classes.pContainer}>
                <p>Every 3rd Sunday of the month</p>
                <p>Contact Sam</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Young Couples</h3>
              <div className={classes.pContainer}>
                <p>Every month</p>
                <p>Contact Neil and Brenda</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>JOL Youth</h3>
              <div className={classes.pContainer}>
                <p>Friday - fortnightly </p>
                <p>Contact Sarena</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Craigieburn Highlands</h3>
              <div className={classes.pContainer}>
                <p>Fortnightly - Monthly</p>
                <p>Contact Liezel</p>
              </div>
            </div>
            <div className={classes.studyContainer}>
              <h3>Young Adults</h3>
              <div className={classes.pContainer}>
                <p>Tuesday - Fortnightly</p>
                <p>Contact Kath</p>
              </div>
            </div>
            {/* </ul> */}
          </div>
        </div>
        <div className={classes.thirdColumn}>
          <div className={classes.footerColumnTitle}>Contact Us</div>
          <div className={classes.emailContainer}>
            <form
              className={classes.emailUsContent}
              ref={form}
              onSubmit={sendEmail}
            >
              <div className={classes.emaillUs}>
                <Label htmlFor="name">Name</Label>
                <input
                  className={classes.input}
                  type="text"
                  name="user_name"
                  required
                  id="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>

                <Label htmlFor="email">Email</Label>
                <input
                  className={classes.input}
                  type="email"
                  name="user_email"
                  required
                  id="emailUs"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                ></input>

                <Label htmlFor="phone">Phone</Label>
                <input
                  className={classes.input}
                  type="number"
                  name="user_phone"
                  required
                  id="phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                ></input>

                <Label htmlFor="message">Message Us</Label>
                <textarea
                  className={classes.input}
                  style={{
                    height: "8rem",
                  }}
                  type="text"
                  name="message"
                  required
                  id="message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
                <div style={{ display: "grid", width: "90%" }}>
                  <input
                    type="submit"
                    value="Send"
                    style={{
                      height: "2rem",
                      marginBottom: "2rem",
                      marginTop: "1rem",
                      border: "1px solid rgb(85, 83, 83)",
                      // color: "white",
                    }}
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
Implementation of EmailJS

1. create the emailjs account
2. at the UI press, Add New Service
3. connect the email address to the service
4. create email template
5. go to docs >>> Examples >>> React
6. copy the form html from site

   <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

  7. get and implement the service ID, template id and public id
  
  8. public id is inside the account tab

*/
