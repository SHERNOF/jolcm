import classes from "./header.module.css";
import { motion } from "framer-motion";
// import { GrUserAdmin } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import { IconContext } from "react-icons";

const style = {
  color: "white",
  fontSize: "2em",
  // border: "1px solid red",
  width: "2rem",
  height: "1.5rem",
  cursor: "pointer",
  margin: "2px 0 5px 0",
};

const entrance = {
  hidden: { opacity: 0, x: -3000 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 3.5,
      delay: 2.5,
    },
  },
};

export default function Header({ isMed, wheel, isOpen, isOpenClickHandler }) {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];

  return (
    <nav>
      <motion.div
        variants={entrance}
        initial="hidden"
        animate="visible"
        className={`${classes.container} ${wheel && classes.bgrned} 
`}
      >
        <div className={classes.logoContainer}>
          <img src="../pics/logo-white.svg" alt="img"></img>
        </div>

        <div className={classes.iconContainer}>
          <div className={classes.rxEnterContainer}>
            <RxEnter style={style} />
          </div>

          <div
            className={`${classes.openIcon} ${isOpen && classes.close} `}
            onClick={isOpenClickHandler}
          >
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
