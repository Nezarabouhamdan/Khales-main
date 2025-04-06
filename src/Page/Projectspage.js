import React, { useEffect, useState } from "react";
import { useLanguage } from "../Context/Languagecontext"; // Import the language context
import { Helmet } from "react-helmet-async";

import { GreenText, Title } from "../components/Whoweare/TextContent";
import { Portfolio } from "../components/Portfolio/Portfolio";
import HeroSlider from "../components/Slider/Slider";
import CTASection from "../components/Homecontact/CTASection";
// const pexel = (id) =>
//   `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

// const images = [
//   {
//     //middle
//     position: [0, 0, 1.5],
//     rotation: [0, 0, 0],
//     url: "https://i.ibb.co/XrwLfbVn/khales-ae-arab-construction-luxury-engineering-make-it-crea-adbc814e-5da3-4265-a683-b41679c9a755-3-e.png",
//   },
//   {
//     position: [-0.8, 0, -0.6],
//     rotation: [0, 0, 0],
//     url: "https://i.ibb.co/hRKcmFXh/img6-min.jpg",
//   },
//   {
//     position: [0.8, 0, -0.6],
//     rotation: [0, 0, 0],
//     url: "    https://i.ibb.co/HDQkwccZ/khales-ae-Modern-minimalist-interior-staircase-open-plan-desi-2ba91f49-ab7b-4ab5-972a-69e06f911a30-1.png",
//   },
//   {
//     position: [-1.75, 0, 0.25],
//     rotation: [0, Math.PI / 2.5, 0],
//     url: "https://i.ibb.co/jPQCbPdC/Screenshot-2025-03-26-105519.png",
//   },
//   {
//     position: [-2.15, 0, 1.5],
//     rotation: [0, Math.PI / 2.5, 0],
//     url: "https://i.ibb.co/ZCJVcq6/Screenshot-2025-03-26-105750.png",
//   },
//   // {
//   //   //1
//   //   position: [-2, 0, 2.75],
//   //   rotation: [0, Math.PI / 2.5, 0],
//   //   url: "https://i.ibb.co/HDQkwccZ/khales-ae-Modern-minimalist-interior-staircase-open-plan-desi-2ba91f49-ab7b-4ab5-972a-69e06f911a30-1.png",
//   // },
//   {
//     //7
//     position: [1.75, 0, 0.25],
//     rotation: [0, -Math.PI / 2.5, 0],
//     url: "https://i.ibb.co/hRKcmFXh/img6-min.jpg",
//   },
//   {
//     //8
//     position: [2.15, 0, 1.5],
//     rotation: [0, -Math.PI / 2.5, 0],
//     url: "https://i.ibb.co/0jR7hgcW/Screenshot-2025-03-26-105833.png",
//   },
//   // {
//   //   //last9
//   //   position: [2, 0, 2.75],
//   //   rotation: [0, -Math.PI / 2.5, 0],
//   //   url: "https://i.ibb.co/XrwLfbVn/khales-ae-arab-construction-luxury-engineering-make-it-crea-adbc814e-5da3-4265-a683-b41679c9a755-3-e.png",
//   // },
// ];
export const slides = {
  eng: [
    {
      id: 1,
      image:
        "https://i.ibb.co/DPKhyq7k/khales-ae-real-photograph-of-a-super-luxury-modern-mansion-fr-c2c57d33-5a47-4ccb-b054-498b16745d23-3.png",
      title: "Shape Your Vision with Smart Planning",
      content: "",
      button: "GET IN TOUCH",
    },
  ],
  ar: [
    {
      id: 1,
      image:
        "https://i.ibb.co/DPKhyq7k/khales-ae-real-photograph-of-a-super-luxury-modern-mansion-fr-c2c57d33-5a47-4ccb-b054-498b16745d23-3.png",
      title: "شكّل رؤيتك بتخطيط ذكي",
      content: "نُمكّن مشاريعك بحلول تخطيط مبتكرة ومستدامة.",
      button: " تواصل معنا",
    },
  ],
};
function Projectspage() {
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
        <title>{language === "ar" ? "معرض المشاريع" : "Portfolio"} </title>
        <meta name="description" content="Welcome to projects." />
      </Helmet>
      <HeroSlider
        slides={slides[language] || slides["eng"]}
        language={language}
        isLoading={isLoading}
        rtl={language === "ar"}
      />{" "}
      {/* <Hero /> */}
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Title
          style={{
            marginTop: "20vh",
          }}
        >
          <GreenText>Our</GreenText> Portfolio
        </Title>
      </div>
      <Portfolio />
      <CTASection />
    </>
  );
}

export default Projectspage;
