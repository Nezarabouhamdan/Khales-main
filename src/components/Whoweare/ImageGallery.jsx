"use client";
import React from "react";
import styled from "styled-components";

const ImageGallery = () => {
  return (
    <GalleryContainer>
      <SmallImagesGrid>

      <ImageColumn style={{ flex: "1 1 25%" }}>          <MainImageWrapper>
            <StyledImage
                          src="https://i.ibb.co/1Grj72xK/khales-ae-engineer-workers-in-construction-site-daylight-2-1e676ce2-5bb5-45d8-8368-bca73aedc70e-2-1.png"

              alt="Luxury building entrance"
            />
          </MainImageWrapper>
         
        </ImageColumn>   <ImageColumn>
          <ImageWrapper>
            <StyledImage
              src="https://i.ibb.co/XrwLfbVn/khales-ae-arab-construction-luxury-engineering-make-it-crea-adbc814e-5da3-4265-a683-b41679c9a755-3-e.png"
              alt="Luxury building entrance"
            />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage              src="https://i.ibb.co/HDQkwccZ/khales-ae-Modern-minimalist-interior-staircase-open-plan-desi-2ba91f49-ab7b-4ab5-972a-69e06f911a30-1.png"

              alt="Modern apartment building"
            />
          </ImageWrapper>
        </ImageColumn>   <ImageColumn>
          <ImageWrapper>
            <StyledImage
                 src="https://i.ibb.co/HDQkwccZ/khales-ae-Modern-minimalist-interior-staircase-open-plan-desi-2ba91f49-ab7b-4ab5-972a-69e06f911a30-1.png"


              alt="Luxury building entrance"
            />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage
                          src="https://i.ibb.co/XrwLfbVn/khales-ae-arab-construction-luxury-engineering-make-it-crea-adbc814e-5da3-4265-a683-b41679c9a755-3-e.png"

              alt="Modern apartment building"
            />
          </ImageWrapper>
        </ImageColumn>
    
      </SmallImagesGrid>
   
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 991px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const MainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 30px;
  
`;

const SmallImagesGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
height:45vh;
  @media (max-width: 640px) {
    flex-direction: column;
    height: auto; /* Allow height to adjust in mobile view */

    gap: 10px;
  }
`;
const ImageColumn = styled.div`
display: flex;
gap: 20px;
height: 100%;
  flex-direction: column;  flex: 1; /* Allow equal distribution of space */


@media (max-width: 640px) {
  flex-direction: column;
  height: auto;
  gap: 10px;
}
`;

const ImageWrapper = styled.div`
  flex: 1;
  border-radius:15px;
  overflow: hidden;
  height: 100%;

  @media (max-width: 640px) {
    height: 200px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 35% 80%;

  display: block;
`;

export default ImageGallery;
