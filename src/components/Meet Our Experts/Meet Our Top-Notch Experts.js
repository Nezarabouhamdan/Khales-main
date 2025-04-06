


import React from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../../assets/team3.jpg'
import img2 from '../../assets/team2.jpg'
import img3 from '../../assets/team4.jpg'
import img4 from '../../assets/team5.jpg'
import img5 from '../../assets/team6.jpg'
import img6 from '../../assets/team7.jpg'
import img1 from '../../assets/team1.jpg'

// Animation for initial load (optional)
const zoomInAnim = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Layout Containers
const Section = styled.section`
  padding: 150px 0;
  background-color: #fff;
  border-radius: 40px 40px 0 0;
  position: relative;
  z-index: 10;
  margin-top: -40px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 80px;
  text-align: left;
   @media (max-width: 968px) {
     text-align: center;

  font-size: 35px;
  }
  
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 968px) {
    flex-direction:column;
  }
`;

// Column for grid layout
const Column = styled.div`
  flex: 0 0 ${props => props.width};
  max-width: ${props => props.width};
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 30px;
    @media (max-width: 968px) {
      max-width: 100%;

width:100%;
  }
`;

// Team card link with load animation
const TeamCard = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  animation: ${zoomInAnim} 0.5s forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;

  /* When hovering anywhere on the card, show the overlay */
  &:hover .overlay {
    opacity: 1;
  }
`;

// ImgWrapper: Differentiates between small (circular) and big (rectangular) cards
const ImgWrapper = styled.div`
  width: ${props => (props.big ? '100%' : '192px')};
  height: ${props => (props.big ? '414px' : '192px')};
  margin: 0 auto;
  border-radius: ${props => (props.big ? '50%' : '50%')};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  
  /* Image zoom on hover */
  &:hover img {
    transform: scale(1.1);
  }
`;

// Overlay: Hidden by default; appears on hover with grey background and member name
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(128, 128, 128, 0.7);
  color: #fff;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

// Numbers section (kept similar to original)
const NumbersSection = styled.div`
  margin-top: 50px;
`;

const NumberCard = styled.div`
  width:31%;
  min-width: 280px;
  text-align: center;
  padding: 40px;
  border-top: 1px solid;
  animation: ${zoomInAnim} 0.5s forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
    @media (max-width: 968px) {

width:100%;
  }
  
`;

const NumberPerc = styled.h3`
  font-size: 35px;
  color: #66a109;
`;

const NumberText = styled.p`
  font-size: 18px;
  color: #5e636e;
`;

// Main Component
const TeamSection = () => {
  return (
    <Section>
      <Container>
        <Title>Meet our top-notch experts</Title>
        <Row>
          {/* First Column (col-lg-2 equivalent) with two small cards */}
          <Column width="18.66%">
            <TeamCard href="#" delay="0s">
              <ImgWrapper>
              <img src={img2}alt="Team 1" />

            i  <Overlay className="overlay">John Henderson</Overlay>
              </ImgWrapper>
            </TeamCard>
            <TeamCard href="#" delay="0.1s">
              <ImgWrapper>
              <img src={img3}alt="Team 1" />

            i  <Overlay className="overlay">John Henderson</Overlay>
              </ImgWrapper>
            </TeamCard>
          </Column>
          
          {/* Second Column (col-lg-4 equivalent) with one big card */}
          <Column width="33.33%">
            <TeamCard href="#" delay="0.2s">
              <ImgWrapper big>
              <img src={img}alt="Team 1" />

            i  <Overlay className="overlay">Michael Smith</Overlay>
              </ImgWrapper>
            </TeamCard>
          </Column>
          
          {/* Third Column (col-lg-2 equivalent) with two small cards */}
          <Column width="18.66%">
            <TeamCard href="#" delay="0.3s">
              <ImgWrapper>
              <img src={img4}alt="Team 1" />
                <Overlay className="overlay">John Henderson</Overlay>
              </ImgWrapper>
            </TeamCard>
            <TeamCard href="#" delay="0.4s">
              <ImgWrapper>
              <img src={img5}alt="Team 1" />
                <Overlay className="overlay">John Henderson</Overlay>
              </ImgWrapper>
            </TeamCard>
          </Column>
          
          {/* Fourth Column (order adjustments applied in original) with two small cards */}
          <Column width="18.66%">
            <TeamCard href="#" delay="0.5s">
              <ImgWrapper>
              <img src={img6}alt="Team 1" />
                <Overlay className="overlay">John Henderson</Overlay>
              </ImgWrapper>
            </TeamCard>
            <TeamCard href="#" delay="0.6s">
              <ImgWrapper>
                {/* This card shows a "See All" message */}<img src={img1}alt="Team 1" />
                <Overlay className="overlay">James Madison</Overlay>
              </ImgWrapper>
            </TeamCard>
          </Column>
          
    
        </Row>
        
        {/* Numbers Section */}
        <NumbersSection>
          <Row>
            <NumberCard delay="0.2s">
              <NumberPerc>100%</NumberPerc>
              <NumberText>
                Happy Customer and <br />
                Repeating
              </NumberText>
            </NumberCard>
            <NumberCard delay="0.4s">
              <NumberPerc>126</NumberPerc>
              <NumberText>
                Projects Completed in <br />
                10 Years
              </NumberText>
            </NumberCard>
            <NumberCard delay="0.6s">
              <NumberPerc>25</NumberPerc>
              <NumberText>
                Architects and <br />
                High Qualified Crafters
              </NumberText>
            </NumberCard>
          </Row>
        </NumbersSection>
      </Container>
    </Section>
  );
};

export default TeamSection;
