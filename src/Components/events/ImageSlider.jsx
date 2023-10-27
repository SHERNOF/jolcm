import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { easeInOut } from "framer-motion";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: 'all 1s '
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  
borderRadius:'50%',
background:'black',
color:'white',
display:'flex',
justifyContent:'center',
alignItems:'center'

};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",

  borderRadius:'50%',
background:'black',
color:'white',
display:'flex',
justifyContent:'center',
alignItems:'center',

};

const sliderStyles = {
  position: "relative",
  height: "100%",
 
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
    
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex)
  console.log(slides[currentIndex])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    // backgroundImage: `url(${slides[currentIndex].url})`,
    // border:'1px solid red',
    
  };

  return (
    <div style={sliderStyles}>
      <div>

              <div style={rightArrowStyles} onClick={goToPrevious}>
              <KeyboardArrowRightIcon />
            </div>
            <div style={leftArrowStyles} onClick={goToNext}>
              <KeyboardArrowLeftIcon />
            </div>
      </div>
      <div style={slideStylesWidthBackground}><img src={slides[currentIndex]} alt='fellowship'></img></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;