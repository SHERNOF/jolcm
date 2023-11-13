import * as React from "react";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledLink from "../../UI/links/StyledLink";

// const capabilities = ["Messages", "Events", "Users"]
const capabilities = [
  { 
    cap: "Messages",
    link:'/messages'
  },
  { 
    cap: "Events",
    link:'/events'
  },
  { 
    cap: "Users",
    link:'/users'
  },
]

export default function Header() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const wheel = useSelector((state) => state.wheel);
  const [showPop, setshowPop] = React.useState(false)
  console.log(showPop)

  return (
    <nav>
      <div
        className={`${classes.navContainer} ${wheel && classes.bgned}
         ${classes.logged}`}
      >
        <Link to="/" className={classes.logo}>
          <img
            className={classes.navLogo}
            src="../pics/JOL3.svg"
            alt="logo"
          ></img>
        </Link>

        {userInfo && (
          <div style={{position:'relative'}}>
            <div className={classes.initialHolder} onMouseEnter={()=>setshowPop(!showPop)} onClick={()=>{setshowPop(!showPop)}} >
            {userInfo.name.charAt(0)}
            </div>
            <ul >
              {capabilities.map((x, index)=>(
                <StyledLink key={index} to={`${x.link}`}>
                  <li onClick={()=>{setshowPop(!showPop)}} className={`${classes.list} ${showPop && classes.appear}`} >{x.cap}</li>
                </StyledLink>
                
              ))}
        </ul>
          </div>
        )}

      </div>
    </nav>
  );
}
