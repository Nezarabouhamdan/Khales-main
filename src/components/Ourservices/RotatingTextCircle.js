import React from "react";
import styled, { keyframes } from "styled-components";
import img from "../../assets/10-Number.png";

/* The same rotation keyframes */
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/* A static SVG (no animation here) */
const ContainerSVG = styled.svg`
  width: 400px;
    @media (max-width: 968px) {
      width: 250px;

  }
`;

/*
  A rotating group that will spin around the center (250, 250).
  transform-box: fill-box => uses the SVG bounding box for transform calculations
  transform-origin: center => sets the origin to the center of that box
*/
const RotatingGroup = styled.g`
  transform-box: fill-box;
  transform-origin: center;
  animation: ${rotate} 13s linear infinite;
`;

const CircularText = () => (
  <ContainerSVG viewBox="0 0 500 500">
    <defs>
      {/* Circular path for the text */}
      <path
        id="circle-path"
        d="M250,400 a150,150 0 0,1 0,-300 a150,150 0 0,1 0,300Z"
      />
      {/* Clip path for the image */}
      <clipPath id="image-clip">
        <circle cx="250" cy="250" r="140" />
      </clipPath>
    </defs>

    {/* 1) Static image (NOT in the rotating group) */}
    <image
      href={img}
      x="140"
      y="140"
      width="220"
      height="220"
      clipPath="url(#image-clip)"
    />

    {/* 2) Rotating group that contains ONLY the text */}
    <RotatingGroup>
      <text fill="#ffff">
        <textPath
          href="#circle-path"
          textLength="900"
          style={{
            fontFamily: "Inter",
            fontSize: "40px",
          }}
        >
          • Years of experience • since 1991
        </textPath>
      </text>
    </RotatingGroup>
  </ContainerSVG>
);

export default CircularText;
