"use client";
import React from "react";
import styled from "styled-components";
import Timeline from "./Timeline";
import ProcessStep from "./ProcessStep";
import img from '../../assets/arch1.jpeg'

const ProcesSection = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Section>
        <Container>
          <LeftColumn>
            <Heading>Designing Your Dream in Three Simple Steps</Heading>
            <StepsContainer>
              <Timeline />
              <StepsContent>
                <ProcessStep
                  title="Start Project"
                  description="Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience"
                  marginTop={3}
                />
                <ProcessStep
                  title="Craft"
                  description="Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space"
                  marginTop={47}
                />
                <ProcessStep
                  title="Execute"
                  description="Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space"
                  marginTop={52}
                />
              </StepsContent>
            </StepsContainer>
          </LeftColumn>
          <RightColumn>
            <InteriorImage
              src={img}
              alt="Interior design"
              loading="lazy"
            />
          </RightColumn>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 80px 120px;
  background-color: #fff;
  @media (max-width: 991px) {
    padding: 60px 40px;
  }
  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1218px;
  margin: 0 auto;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  color: #1f1f1f;
  font-family: "Inter", sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 60px;
  margin-right: -2px;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const StepsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RightColumn = styled.div`
display:grid;
place-items:center;
  flex: 1;
`;

const InteriorImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background-color: #2b5d8d;
  border-radius: 4px;
`;

export default ProcesSection;
