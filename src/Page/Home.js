import React, { useEffect, useState } from "react";
import HeroSlider from "../components/Slider/Slider";
import FeaturedProjects from "../components/Featured Projects/FeaturedProjects";
import TestimonialSlider from "../components/Reviews/TestimonialSlider";
import CTASection from "../components/Homecontact/CTASection";
import { slides } from "../data/HeroData";
import WhoAreWe from "../components/Whoweare/WhoAreWe";
import ServicesSwiper from "../components/Whatwedodeep/Whatwedo";
import styled, { css } from "styled-components";
import { useLanguage } from "../Context/Languagecontext";
import { Helmet } from "react-helmet-async";
import { Portfolio } from "../components/Portfolio/Portfolio";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage(); // Assuming you have a language context

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Home - Khales</title>
        <meta
          name="description"
          content="Welcome to Khales. Explore our luxury design and project management solutions."
        />
      </Helmet>
      <section>
        <HeroSlider
          slides={slides[language] || slides["eng"]}
          language={language}
          isLoading={isLoading}
          rtl={language === "ar"}
        />{" "}
        <WhoAreWe />
        {/* <AboutSection /> */}
        <ServicesSwiper />
        {/* <div style={{backgroundColor:'black'}}> <PassionsSection /></div>    */}
        <FeaturedProjects />
        {/* <Process />
      <BespokeDesign/> */}
        <TestimonialSlider />
        {/* <TeamSection/> */}
        <CTASection />
      </section>
    </>
  );
}

export default Home;

const BoxRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BoxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 400px;

  ${({ $isActive }) =>
    !$isActive &&
    css`
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

        img {
          transform: scale(1.05);
        }

        div {
          bottom: 2rem;
        }

        button {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: scale(1.02);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

      img {
        transform: scale(1.05);
      }

      div {
        bottom: 2rem;
      }

      button {
        opacity: 1;
        transform: translateY(0);
      }
    `}
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
`;

const Button = styled.button`
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.8rem 2rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  backdrop-filter: blur(4px);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7));
  z-index: 1;
`;

const Box = ({ title, buttonText, image, $isActive }) => (
  <BoxWrapper $isActive={$isActive}>
    <ImageWrapper>
      <img src={image} alt={title} />
      <Overlay />
    </ImageWrapper>

    <Content>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>{title}</h3>
      <Button>{buttonText}</Button>
    </Content>
  </BoxWrapper>
);

const Section = () => {
  const boxes = [
    {
      title: "Project Management",
      buttonText: "Learn More",
      image: "/project-management.jpg",
    },
    {
      title: "Development Planning",
      buttonText: "Learn More",
      image: "/development-planning.jpg",
    },
    {
      title: "Construction Supervision",
      buttonText: "Learn More",
      image: "/construction-supervision.jpg",
      $isActive: true,
    },
  ];

  return (
    <BoxRow>
      {boxes.map((box, index) => (
        <Box key={index} $isActive={box.$isActive || false} {...box} />
      ))}
    </BoxRow>
  );
};
