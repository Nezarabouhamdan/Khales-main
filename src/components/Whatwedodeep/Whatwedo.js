import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./styles.css"; // Create this CSS file
import { useLanguage } from "../../Context/Languagecontext";
import { Title, GreenText } from "../Whoweare/TextContent";
export default function ServicesSwiper() {
  const { language } = useLanguage(); // Use the context
  const services = {
    eng: [
      {
        title: "Architecture",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Interior Design",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Development Planning",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Engineering Consulting ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Building Contracting",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Landscaping",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Real Estate",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Fit out",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "Project Management",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
    ],
    ar: [
      {
        title: "الهندسة المعمارية",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "التصميم الداخلي",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "التخطيط التنموي",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "الاستشارات الهندسية ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "مقاولات البناء  ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "تنسيق الحدائق   ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: "الحلول العقارية    ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: " التجهيز    ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
      {
        title: " إدارة المشاريع    ",
        image:
          "https://img.freepik.com/premium-photo/back-view-architects-engineers-helmet-construction-site-generative-ai_81262-3132.jpg",
      },
    ],
  };
  const selectedservices = services[language] || services["eng"];
  const title = {
    eng: [{ head: "Our", colored: "Services" }],
    ar: [
      {
        head: "خدماتنا ",
        colored: "المميزة",
      },
    ],
  };
  const selectedtitle = title[language] || title["eng"];

  return (
    <div className="services-section">
      <Title>
        {" "}
        {selectedtitle[0].head}{" "}
        <GreenText>{selectedtitle[0].colored}</GreenText>{" "}
      </Title>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={4} // Start with middle slide
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="services-swiper"
      >
        {selectedservices.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="slide-overlay" />
              <h3>{service.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
