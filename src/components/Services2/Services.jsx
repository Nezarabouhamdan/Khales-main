"use client";
import * as React from "react";
import ServiceCard from "./ServiceCard";

const Services = (  imageSrc,
  titlePart1,
  titlePart2,
  description,) => {
  return (
    <div>
  
      <ServiceCard
        imageSrc={imageSrc}
        titlePart1={titlePart1}
        titlePart2={titlePart2}
        description={description}
        buttonText="View Details"
      />
    </div>
  );
};

export default Services;