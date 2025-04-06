import ContactForm from "../components/Figmacontact/ContactForm";
import React, { useEffect, useState } from "react";
import ContactUs from "../components/figmaform/ContactUs";
import { Heroimg, Herosection } from "../components/Hero/Herostyles";
import img from "../assets/Screenshot 2025-03-18 122742.png";
import { Row2 } from "../Globalstyles";
import ServiceCard from "../components/Services2/ServiceCard";
import { GreenText, Title } from "../components/Whoweare/TextContent";
import CTASection from "../components/Homecontact/CTASection";
import { contactData } from "../data/contactData";
import { useLanguage } from "../Context/Languagecontext";
import { Helmet } from "react-helmet-async";

function Contact() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Get translated services data array (flat list)
  const services = contactData[language] || contactData["eng"];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Create chunks of 3 items for each row
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const serviceChunks = chunkArray(services, 3);

  return (
    <>
      <Helmet prioritizeSeoTags={true}>
        <title>{language === "ar" ? "تواصل معنا" : "Contact us"} </title>
        <meta name="description" content="Welcome to projects." />
      </Helmet>
      <Herosection>
        <Heroimg src={img} style={{ filter: "brightness(75%)" }} />
      </Herosection>
      <ContactUs />
      <div style={{ display: "grid", placeItems: "center", margin: "70px" }}>
        {" "}
        <Title>
          Offices<GreenText> Location</GreenText>
        </Title>
      </div>
      {serviceChunks.map((chunk, index) => (
        <React.Fragment key={index}>
          <br />
          <Row2 rtl={language === "ar"}>
            {chunk.map((service, idx) => (
              <ServiceCard
                key={idx}
                imageSrc={service.image}
                titlePart1={service.titlePart1}
                titlePart2={service.titlePart2}
                description={service.description}
                buttonText={language === "ar" ? "المزيد" : "Learn More"}
                rtl={language === "ar"}
              />
            ))}
          </Row2>
        </React.Fragment>
      ))}

      <CTASection></CTASection>
    </>
  );
}

export default Contact;
