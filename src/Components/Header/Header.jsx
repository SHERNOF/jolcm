import classes from "./header.module.css";
import { motion } from "framer-motion";

import { useState } from "react";

const entrance = {
  hidden: { opacity: 0, x: -3000 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 4,
      delay: 4.5,
    },
  },
};

export default function Header({ isMed, wheel }) {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav>
      <motion.div
        variants={entrance}
        initial="hidden"
        animate="visible"
        className={`${classes.container} ${wheel && classes.bgrned}`}
      >
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
      </motion.div>
    </nav>
  );
}
