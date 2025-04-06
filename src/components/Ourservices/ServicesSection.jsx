import React from "react";
import styled from "styled-components";
import img from "../../assets/arch1.jpeg";
import img2 from "../../assets/img5.jpeg";
import img3 from "../../assets/v6.jpeg";
import "./c.css";
import { Link } from "react-router-dom";
// SECTION & CONTAINER
const Section = styled.section`
  padding: 80px 15px;
  background-color: #f1eee9;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// TITLE AREA
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;

  p {
    color: #666;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

// RESPONSIVE GRID
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledSvg = styled.svg`
  border-left: 2px solid #666;
`;
// SERVICE CARD
const ServiceCard = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  background: #F1EEE9;
  padding: 30px;
  overflow: hidden;

  transition: box-shadow 0.3s ease;
  border-left: 1px solid #666666;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  /* On large screens, add extra top margin to 2nd and 4th cards */
  @media (min-width: 992px) {
    &:nth-child(2),
    &:nth-child(4) {
      margin-top: 150px;
    }
  }

  .icon {
    font-size: 30px;
    margin-bottom: 20px;
    color: #66a109;
  }

  h5 {
    font-family: "Inter";
    font-size: 24px;
    margin-bottom: 20px;
    color: #000;
    font-weight: 500;

    line-height: 28.8px;
  }

  .img {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius:10px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .text {
    color: #666;
    font-size: 14px;
    line-height: 25.2px;
    margin-top: 50px;
    Font size:14px
font-family:'Inter ExtraLight';
font-weight:400;


  }

  .arrow {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 14px;
    color: green;
    transition: transform 0.4s ease;
  }

  &:hover .img img {
    transform: scale(1.1);
  }
  &:hover .arrow {
    transform: translateX(5px);
  }
`;

// CENTERED BUTTON AT BOTTOM
const CenteredButton = styled.div`
  text-align: center;
  margin-top: 80px;

  a {
    display: inline-block;
    padding: 14px 30px;
    border-radius: 30px;
    background-color: #66a109; /* Orange style */
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;

    &:hover {
      background: #000;
    }

    span {
      display: inline-flex;
      align-items: center;
    }

    i {
      margin-left: 6px;
      font-size: 12px;
      vertical-align: middle;
    }
  }
`;

// ----- Sample Data -----
// Update the image paths as needed. For example, if using the public folder, prefix with "/".
const servicesData = [
  {
    id: 1,
    iconClass: "la la-hard-hat",
    title: "Architecture & Building",
    imgSrc: img,
    description:
      "Planning, 3D Visualization, Landscape Design, Structural Drawing, CGI, Construction Supervision",
      href:'/Architecture'
  },
  {
    id: 2,
    iconClass: "la la-bezier-curve",
    title: "Interior and Exterior Design",
    imgSrc: img2,
    description:
      "Interior Design, Exterior Design, Renovation, Sustainable Design, Installation, Plumbing System, 3D Experience",
      href:'/InteriorDesign'

  },
  {
    id: 3,
    iconClass: "la la-bed",
    title: "Project Management",
    imgSrc: img3,
    description:
      "Bespoke Furniture, Material Supply, Online Store, Distribute, 3D Modeling",
            href:'/ProjectManagement'


  },
  {
    id: 4,
    iconClass: "la la-comments",
    title: "Engineering Consultancy",
    imgSrc: img,
    description: "Project Analysis, Bid Documentation, Construction Supervisor",
    href:'/EngineeringConsultancy'

  },
];

const ServicesSection = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <p>our services</p>
        </TitleWrapper>
        <ServicesGrid>
          {servicesData.map((service) => (
            <ServiceCard to={service.href} key={service.id}>
              <div className="icon">
                <i className={service.iconClass}></i>
              </div>
              <h5>{service.title}</h5>
              <div className="img">
                <img src={service.imgSrc} alt={service.title} />
              </div>
              <div className="text">{service.description}</div>

              <span className="arrow">
                <i className="ti-arrow-top-right"></i>
              </span>
            </ServiceCard>
          ))}
        </ServicesGrid>
        <CenteredButton>
          <a href="#">
            <span>
              Get A Free Quote Now <i className="ti-arrow-top-right"></i>
            </span>
          </a>
        </CenteredButton>
      </Container>
    </Section>
  );
};

export default ServicesSection;
