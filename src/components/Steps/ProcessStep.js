"use client";
import React from "react";
import styled from "styled-components";



const ProcessStep= ({
  title,
  description,
  marginTop,
}) => {
  return (
    <StepContainer marginTop={marginTop}>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  margin-top: ${(props) => props.marginTop}px;
`;

const StepTitle = styled.h2`
  color: #1f1f1f;
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

const StepDescription = styled.p`
  color: #545454;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 40px;
  max-width: 570px;
  @media (max-width: 991px) {
    font-size: 20px;
    line-height: 32px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export default ProcessStep;
