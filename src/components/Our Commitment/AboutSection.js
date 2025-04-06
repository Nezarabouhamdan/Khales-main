"use client";
import * as React from "react";
import styled from "styled-components";
import AboutFeatureCard from "./AboutFeatureCard";
import AboutButton from "./AboutButton";

const AboutSection2= () => {
  return (
    <Section aria-label="About PrimeNest">
      <MainImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e835c529015523cd829208692357b3358f733ba70e22a9bc343eabf2ace465f2?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
        alt="PrimeNest property showcase"
      />
      <ContentWrapper>
        <MainContent>
          <TextContent>
            <MainHeading>
              Our Commitment to Making Home ownership Easy
            </MainHeading>
            <Description>
              At PrimeNest, we simplify the journey to homeownership. Our expert
              team provides guidance and support at every step, ensuring you
              feel confident in your decisions
            </Description>
          </TextContent>
          <FeaturesGrid>
            <AboutFeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c66c20d3d4b32177e291de6ae7af9e7a6f2e3fc85d0cbe74b12c4be25ca1faab?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
              title="Exclusive Listings"
              description="Access exclusive, high-quality properties, from luxury apartments to beautiful family homes"
            />
            <AboutFeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec271d63d5090fd187a42116255eaa73c29422025daf6a11505847adb4ab6e6?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
              title="Transparent Pricing"
              description="We ensure transparency with clear pricing and helping you decide confidently"
            />
            <AboutFeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/38da5682134246b969c734746abd7ae28e3fc400293435308b33ec7202b4344b?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
              title="Trusted Advisors"
              description="Our experienced agents are here to help you navigate the market"
            />
          </FeaturesGrid>
        </MainContent>
        <AboutButton>Learn More</AboutButton>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  padding: 100px 56px;
  align-items: end;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const MainImage = styled.img`
  aspect-ratio: 1.16;
  object-fit: contain;
  object-position: center;
  width: 694px;
  min-width: 240px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  min-width: 240px;
  width: 894px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainContent = styled.div`
  width: 100%;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TextContent = styled.div`
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h2`
  color: #141414;
  font-size: 45px;
  font-weight: 700;
  line-height: 64px;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 51px;
  }
`;

const Description = styled.p`
  color: #434343;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin: 12px 0 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  align-items: center;
  gap: 20px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default AboutSection2;
