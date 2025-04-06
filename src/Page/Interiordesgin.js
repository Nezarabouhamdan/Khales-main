import React from "react";

import InteriorDesign from "../components/InteriorDesign/InteriorDesign";
import { Herosection, Heroimg } from "./Faqs";
import img2 from "../assets/faq.jpg";
import PrimenestFeature from "../components/Find Your Dream Home/PrimenestFeature";

const data = [
  {
    title: "Interior Design",
    description:
      "  Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication",
    images: [
      "https://globallink.ae/wp-content/uploads/2023/12/93563595_m_normal_none.webp",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/TA/XE/AZ/10463893/civil-engineering-consultancy-service-500x500.jpg",
      "https://firsttrendarchitects.com/wp-content/uploads/2024/07/Engineering-consultant-and-his-tasks.png",
      "https://assets-global.website-files.com/626a352c728bdb2d02e14b1c/6311f04513d2a45fa70d1eb7_engineering%20consultant.jpg",
    ],
  },
];
function Interiordesgin() {
  return (
    <div>
      {" "}
      <InteriorDesign data={data} />
      <PrimenestFeature />
    </div>
  );
}

export default Interiordesgin;
