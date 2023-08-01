import React, { useRef, useState } from "react";
import classes from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconContainer from "./IconContainer";
import Label from "../UI/label/Label";
import emailjs from '@emailjs/browser';



export default function Footer() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_js763ib', 'template_wwgnrpj', form.current, 'KX4fv-a94i59I1Ewy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setname('')
    setemail('')
    setphone('')
    setmessage('')
  };


  return (
    <div className={classes.footer}>
      <div className={classes.column1}>
        <div className={classes.icons}>
          <div
            className={classes.iconTitle}
            style={{
              height: "20%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              fontSize: "1.5em",
            }}
          >
            Joy of Life
          </div>
          <div
            className={classes.iconContainer}
            style={{
              marginTop: "4rem",
            }}
          >
            <IconContainer >
              <FacebookIcon   
                style={{ color: "#1DA1F2", fontSize: "1.5rem",  }}
              ></FacebookIcon>
            </IconContainer>
            <IconContainer>
              <PhoneEnabledIcon
                style={{ color: "#075e54", fontSize: "1.5rem" }}
              ></PhoneEnabledIcon>
            </IconContainer>
            <IconContainer>
              <TwitterIcon
                style={{ color: "#00ACEE", fontSize: "1.5rem" }}
              ></TwitterIcon>
            </IconContainer>
            <IconContainer>
              <InstagramIcon
                style={{ color: "#E4405F", fontSize: "1.5rem" }}
              ></InstagramIcon>
            </IconContainer>
          </div>
        </div>
        <div className={classes.ministries1}>
          <div className={classes.min1Title}>Bible Study Groups</div>
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
      <div className={classes.column2}>
        <div className={classes.emailContainer}>
          <form className={classes.emailUsContent} ref={form} onSubmit={sendEmail}>
            <div className={classes.emaillUs}>
              <Label htmlFor="name">Name</Label>
              <input
                className={classes.input}
                type="text"
                name="user_name"
                required
                id="name"
                value={name}
                onChange={e=>setname(e.target.value)}
              ></input>

              <Label htmlFor="email">Email</Label>
              <input
                className={classes.input}
                type="email" 
                name="user_email"
                required
                id="emailUs"
                value={email}
                onChange={e=>setemail(e.target.value)}
              ></input>

              <Label htmlFor="phone">Phone</Label>
              <input
                className={classes.input}
                type="number"
                name="user_phone"
                required
                id="phone"
                value={phone}
                onChange={e=>setphone(e.target.value)}
              ></input>

              <Label htmlFor="message">Message Us</Label>
              <textarea
                className={classes.input}
                style={{
                  height: "10rem",
                }}
                type="text"
                name="message"
                required
                id="message"
                value={message}
                onChange={e=>setmessage(e.target.value)}
              />
              <div style={{display:'grid', width:'90%', }}>
              <input
                type="submit"
                value="Send"
                style={{ height: "2rem", marginBottom: "2rem", marginTop: "1rem" }}
              >  
              </input>
              </div>
            </div>
          </form>
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