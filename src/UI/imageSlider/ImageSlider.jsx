import { useState } from "react";
import styled from "@emotion/styled";

import { BiCircle } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const slideContainer = {
  width: "100%",
  height: "100%",
  position: "relative",
  margin: "0 auto",
};

const RightArrowStyles = styled("div")`
  all: unset;
  /* display: block; */
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  height: 100%;
  width: 35px;
  padding: 0.5rem;
  font-size: 25px;
  top: 50%;
  transform: translate(0, -50%);
  background: none;
  transition: background-color 200ms ease-in-out;
  @media only screen and (max-width: 390px) {
    padding: 0;
    font-size: 2em;
  }

  &:hover {
    color: white;
    background-color: rgb(0, 0, 0, 0.2);
    height: 100%;
    right: 0;
    cursor: pointer;
    animation: test 0.5s ease-in-out;
  }

  @keyframes test {
    50% {
      scale: 1.3 1;
    }
  }
`;

const LeftArrowStyles = {
  ...RightArrowStyles,
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  bottom: "3%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "all 1s",
};
const Button = styled.button`
  cursor: pointer;
  display: block;
  all: unset;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  transition: all 0.25s;
  margin-left: 0.25rem;
  @media only screen and (max-width: 390px) {
    font-size: 0.6em;
  }

  & {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  &:hover {
    scale: 1.25;
  }
`;

const Image = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  flex-grow: 0;
  transition: all 0.25s ease-in-out;
`;

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div style={slideContainer}>
      <RightArrowStyles onClick={goToNext} style={{ right: "1px" }}>
        <IoIosArrowDroprightCircle />
      </RightArrowStyles>
      <LeftArrowStyles onClick={goToPrevious} style={{ left: "1px" }}>
        <IoIosArrowDropleftCircle />
      </LeftArrowStyles>

      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {slides.map((slide) => (
            <Image
              key={slide}
              style={{
                translate: `${-100 * currentIndex}%`,
              }}
              src={slide}
              alt="fellowship"
            />
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <Button key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            {slideIndex === currentIndex ? (
              <FaCircle style={{ color: "#000000fd", fill: "white" }} />
            ) : (
              <BiCircle style={{ color: "white" }} />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

/*
Updates: 
1. used spread operator to utilize RightArrowStyles properties to LefhtArrowStyles.

2. Use React Icons to control the appearance of circle buttons depending on the state

3. use of flex-grow and flex-shrink to 0, to ensure all image will be the same size of container



*/
