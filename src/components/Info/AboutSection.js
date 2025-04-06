"use client";
import * as React from "react";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";
import HeroContent from "./HeroContent";
import StatsBar from "./StatsBar";

const InfoSection = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@600;700&family=Inconsolata:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <MainContainer>
        <ContentWrapper>
          <ImageGallery />
          <HeroContent />
        </ContentWrapper>
        <StatsBar />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  height: 60vh;
  max-width: 1263px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 150px;

  display: flex;
  position: relative;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export default InfoSection;
