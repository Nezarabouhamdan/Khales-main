"use client";
import React from "react";
import styled from "styled-components";
import img from '../../assets/arch1.jpeg'
const BespokeDesign = ({ isRTL = true }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <MainContainer >
      <ContentWrapper rtl={isRTL}>
      <TextSection rtl={isRTL}>
            <BespokeText>Bespoke</BespokeText>
            <Heading>Transform Your Space with Personalized Design</Heading>
            <Subheading>
              Experience the art of tailored interior design. Our personalized
              consultations ensure your vision comes to life.
            </Subheading>
            <FeaturesContainer>
              <Feature>
                <FeatureIcon>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                      fill="black"
                    />
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Tailored Solutions</FeatureTitle>
                <FeatureDescription>
                  We create spaces that reflect your unique style and
                  personality.
                </FeatureDescription>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                      fill="black"
                    />
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Expert Guidance</FeatureTitle>
                <FeatureDescription>
                  Our team of professionals is here to guide you every step of
                  the way.
                </FeatureDescription>
              </Feature>
            </FeaturesContainer>
            <ButtonsContainer    rtl={isRTL}>
              <ContactButton role="button" tabIndex={0}>
                Contact
              </ContactButton>
              <LearnMore role="button" tabIndex={0}>
                <span>Learn More</span>
                <ArrowIcon>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z"
                      fill="#66A109"
                    />
                  </svg>
                </ArrowIcon>
              </LearnMore>
            </ButtonsContainer>
          </TextSection>
          <MainImage
            src={img}            rtl={isRTL}

            alt="Interior Design Showcase"
            loading="lazy"
          />
        </ContentWrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.section`
  display: flex;
  padding: 112px 64px;
  width: 100%;
  max-width: 1352px;
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 991px) {  max-width: 352px;

    padding: 64px 32px;
  }

  @media (max-width: 640px) {
   max-width: 352px;
  padding: 112px 64px;
  width: 100%;
    padding: 32px 16px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${({ rtl }) => (rtl ? 'row-reverse' : 'row')};
  width: 100%;
  position: relative;

  @media (max-width: 991px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  width: 500px;
  text-align: ${({ rtl }) => (rtl ? 'right' : 'left')};
  
  @media (max-width: 1200px) {
    width: 50%;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  } 
`;

const BespokeText = styled.h2`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const Subheading = styled.p`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Feature = styled.article`
  width: 296px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  color: #66a109;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 16px;
`;

const FeatureDescription = styled.p`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: ${({ rtl }) => (rtl ? 'row-reverse' : 'row')};

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`;

const ContactButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #66a109;
  color: #66a109;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  background: transparent;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #66a109;
    color: white;
  }

  &:focus {
    outline: 2px solid #66a109;
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const LearnMore = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #66a109;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid #66a109;
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
`;

const MainImage = styled.img`
  width: 456px;
  height: 440px;
  position: absolute;
  ${({ rtl }) => (rtl ? 'left: 0;' : 'right: 0;')}
  top: 61px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    height: auto;
    top: 0;
    margin-top: 32px;
  }
`;


export default BespokeDesign;
