"use client";
import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: 1.12;
  cursor: pointer;

  &:hover {
    .base-image {
      transform: scale(1.1);
    }
    
    .hover-content {
      opacity: 1;
      transform: translateY(0);
    }
    
    .view-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.8));
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HoverContent = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  text-align: left;
  max-width: 80%;
`;

const ViewButton = styled.button`
  background: white;
  color: black;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: flex-start;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ImageCard = ({ baseImage, overlayImage, title, alt }) => {
  return (
    <CardWrapper>
      <BaseImage 
        src={baseImage} 
        alt={alt} 
        className="base-image"
      />
      <Overlay>
        <HoverContent className="hover-content">
          <Title>{title}</Title>
        </HoverContent>
        <ViewButton className="view-button">
          View Details
        </ViewButton>
      </Overlay>
    </CardWrapper>
  );
};

export default ImageCard;