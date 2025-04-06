"use client";
import * as React from "react";
import styled from "styled-components";

const AboutFeatureCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <CardWrapper>
      <FeatureIcon loading="lazy" src={icon} alt="" />
      <FeatureContent>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureContent>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  border-radius: 24px;
  background-color: #f5f5f5;
  align-self: stretch;
  min-width: 240px;
  margin: auto 0;
  min-height: 291px;
  padding: 20px 13px 49px 30px;
  overflow: hidden;
  flex: 1;
  width: 228px;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const FeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 50px;
`;

const FeatureContent = styled.div`
  display: flex;
  margin-top: 20px;
  max-width: 100%;
  width: 242px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  color: #1e1e1e;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
`;

const FeatureDescription = styled.p`
  color: #434343;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin: 8px 0 0;
`;

export default AboutFeatureCard;
