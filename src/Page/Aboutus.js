import React from "react";
import { Heroimg, Herosection } from "./Faqs";
import img2 from "../assets/faq.jpg";
import SectionAboutUs3 from "../components/Whoweare/SectionAboutUs3";
import AboutSection from "../components/aboutuscompnet2/AboutSection";
import MissionVisionSection from "../components/aboutuscomponetn1/MissionVisionSection";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../Context/Languagecontext";

function Aboutus() {
  const { language } = useLanguage(); // Assuming you have a language context

  return (
    <>
      {" "}
      <Helmet prioritizeSeoTags>
        <title>{language === "ar" ? "نبذة عنا" : "Aboutus"} - Khales</title>
        <meta name="description" content="Welcome to projects." />
      </Helmet>
      <div style={{ height: "10vh" }}></div>
      <AboutSection />
      <MissionVisionSection />
    </>
  );
}

export default Aboutus;
