import React, { useEffect, useRef, useState } from "react";
// import classes from "./aboutUs.module.css";
import './aboutUs.css'


export default function AboutUs() {
  const two = useRef(null);
  const three = useRef(null);
  const [isIntersecting, setisIntersecting] = useState(false);
  const one = useRef(null);
  const [twoVisible, settwoVisible] = useState(false);
  const [threeVisible, setthreeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setisIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50px",
      //  threshold: '.5' 
      }

    );
    console.log(isIntersecting);
    observer.observe(one.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useRef(()=>{
    // if(isIntersecting){
    //   one.current.querySelectorAll('.leftDiv').forEach((el)=>{
    //     el.classList.add('slideIn')
        
    //   })
    // }
    // if(isIntersecting){
    //   one.current.querySelector('rightDiv').forEach((el)=>{
    //     el.classList.add('.slideIn')
    //   })
    // }
  },[])

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       settwoVisible(entry.isIntersecting);
  //     },
  //     { rootMargin: "-100px", threshold: '.25' }
  //   );
  //   console.log(isIntersecting);
  //   observer.observe(two.current);
  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setthreeVisible(entry.isIntersecting);
  //     },
  //     { rootMargin: "-100px", threshold: '.25' }
  //   );
  //   console.log(isIntersecting);
  //   observer.observe(three.current);
  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  return (
    <div className='about'>
      <div className='mv'>
        <div className='jol'    ref={one}>
          <div
            className={`${'leftDiv'} ${isIntersecting && 'slideIn'}` }
            // className='leftDiv'
          >
            <h5>About Joy of Life</h5>
            <p className='content'>
              Is a church and a community of imperfect people seeking to know
              and love JESUS more.
            </p>
          </div>

          <div
            // className={` ${'rightDiv'} ${isIntersecting && 'slideIn'}`}
            className='rightDiv'
          >
            <img
              className='imageContained'
              src="../img/bible2.png"
              alt="bible"
            ></img>
          </div>
        </div>

        {/* <div className='mission' ref={two}>
          <div
            // className={`'rightDiv ${twoVisible && 'slideIn'}`}
            className={`${'rightDiv'} ${twoVisible && 'slideIn'}`}
          >
            <img
              className='imageContained'
              src="../img/share.PNG"
              alt="share"
            ></img>
          </div>

          <div
            className={`${'leftDiv'} 
            ${twoVisible && 'slideIn'}
            `}
          >
            <h5>Mission</h5>
            <p className='content'>
              To share life in Christ Jesus with great joy to all
            </p>
          </div>
        </div>

        <div className='vision' ref={three}>
          <div
            
            className={`${'leftDiv'} ${threeVisible && 'slideIn'}`}
            
          >
            <h5>Vision</h5>
            <p className='content'>
              To see Christ-like people living in fullness of joy
            </p>
          </div>

          <div
            className={`${'rightDiv'} ${threeVisible && 'slideIn'}`}
          >
            <img
              className='imageContained'
              src="../img/fullness.png"
              alt="bible"
            ></img>
          </div>
        </div> */}
      </div>
    </div>
  );
}

