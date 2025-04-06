import React from "react";
import styled from "styled-components";
import img from '../../assets/2.png'
export const ModelVisualization = () => {
  return (
    <ImageSection>
      <Image src={img}></Image>
    </ImageSection>
  );
};

const ImageSection = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 991px) {
    width: 100%;
  }
`;
const Image=styled.img`
height:80%;
border-radius:40px;
width:100%;
`