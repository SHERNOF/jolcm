import classes from "./header.module.css";

import { useState } from "react";

export default function Header({ isMed, wheel }) {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav>
      {/* dynamic styling css module  */}
      <div className={`${classes.container} ${wheel && classes.bgrned}`}>
        <div className={classes.logoContainer}>
          <img src="../pics/logo-white.svg" alt="img"></img>
        </div>
        {isMed ? (
          <div
            className={`${classes.iconContainer} ${isOpen && classes.close}`}
            onClick={clickHandler}
          >
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
          </div>
        ) : (
          <div className={classes.navContent}>
            <ul>
              {pages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
