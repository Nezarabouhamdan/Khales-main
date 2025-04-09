import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { GreenText, Title } from "../Whoweare/TextContent";
import { useLanguage } from "../../Context/Languagecontext"; // Import the language context
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  const { language } = useLanguage(); // Get the current language
  const [swiperKey, setSwiperKey] = useState(0); // Key to force Swiper re-render

  // Testimonial data
  const testimonials = {
    eng: [
      {
        avatar: "https://imgpanda.com/upload/ib/3T9Coa4eFQ.png",
        logo: "https://imgpanda.com/upload/ib/07fXcY3EIH.png",
        text: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
        name: "Herman Miller, Monday",
      },
      {
        avatar: "https://imgpanda.com/upload/ib/EG2hj3Ch4z.png",
        logo: "https://imgpanda.com/upload/ib/VUrKtb4s8h.png",
        text: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
        name: "Matthew Taylor, Invision",
      },
      {
        avatar: "https://imgpanda.com/upload/ib/CEnecSuafy.png",
        logo: "https://imgpanda.com/upload/ib/qisrv7T2JJ.png",
        text: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
        name: "Leonel Mooney, Logitech",
      },
    ],
    ar: [
      {
        avatar: "https://imgpanda.com/upload/ib/3T9Coa4eFQ.png",
        logo: "https://imgpanda.com/upload/ib/07fXcY3EIH.png",
        text: "فريقهم سهل العمل معه وساعدني في إنشاء مواقع ويب مذهلة في وقت قصير. شكرًا لكم يا رفاق على كل العمل الشاق. ثق بنا لقد بحثنا لفترة طويلة.",
        name: "هيرمان ميلر، الإثنين",
      },
      {
        avatar: "https://imgpanda.com/upload/ib/EG2hj3Ch4z.png",
        logo: "https://imgpanda.com/upload/ib/VUrKtb4s8h.png",
        text: "فريقهم سهل العمل معه وساعدني في إنشاء مواقع ويب مذهلة في وقت قصير. شكرًا لكم يا رفاق على كل العمل الشاق. ثق بنا لقد بحثنا لفترة طويلة.",
        name: "ماثيو تايلور، إنفيجن",
      },
      {
        avatar: "https://imgpanda.com/upload/ib/CEnecSuafy.png",
        logo: "https://imgpanda.com/upload/ib/qisrv7T2JJ.png",
        text: "فريقهم سهل العمل معه وساعدني في إنشاء مواقع ويب مذهلة في وقت قصير. شكرًا لكم يا رفاق على كل العمل الشاق. ثق بنا لقد بحثنا لفترة طويلة.",
        name: "ليونيل موني، لوجيتك",
      },
    ],
  };

  // Company data
  const companies = {
    eng: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/AW_DH_PV_POS_RGB_EN_%28002%29.png",
        text: "Project management - 275% Growth",
      },
      {
        logo: "https://gulfvisiongov.com/wp-content/uploads/2024/08/dubai-municipality-logo.png",
        text: "Team management - 195% Growth",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "Secure storage - 235% Growth",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "Secure storage - 235% Growth",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "Secure storage - 235% Growth",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "Secure storage - 235% Growth",
      },
    ],
    ar: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/AW_DH_PV_POS_RGB_EN_%28002%29.png",
        text: "إدارة المشاريع - نمو 275%",
      },
      {
        logo: "https://gulfvisiongov.com/wp-content/uploads/2024/08/dubai-municipality-logo.png",
        text: "إدارة الفريق - نمو 195%",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "التخزين الآمن - نمو 235%",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "التخزين الآمن - نمو 235%",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "التخزين الآمن - نمو 235%",
      },
      {
        logo: "https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png",
        text: "التخزين الآمن - نمو 235%",
      },
    ],
  };
  useEffect(() => {
    setSwiperKey((prev) => prev + 1); // Force Swiper to re-mount
  }, [language]);

  return (
    <section className="creative-testimonial--slider">
      {" "}
      <div
        className="testimonial-inner"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/greenappletravel-ae/image/upload/v1730893099/greenapple/header/Untitled_design_69_k9jhxg.png)",
        }}
      >
        <div className="testimonial-row">
          {/* Dynamic Heading */}
          <h2
            className="testimonial-heading"
            style={{ marginTop: "40px", marginBottom: "60px" }}
          >
            <Title>
              {language === "ar" ? (
                <>
                  عملاؤنا <GreenText>وشركاؤنا</GreenText>
                </>
              ) : (
                <>
                  Clients <GreenText> & Partners</GreenText>
                </>
              )}
            </Title>
          </h2>

          {/* Testimonial Slider */}
          <div className="testimonial-wrap">
            <Swiper
              key={swiperKey} // Force re-initialization on language change
              modules={[Autoplay]}
              spaceBetween={50}
              speed={3000}
              slidesPerView={1}
              loop
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              effect="slide"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {testimonials[language].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide--inner">
                    <div className="slide-avatar">
                      <img src={testimonial.avatar} alt="Avatar" />
                    </div>
                    <div className="testimonial-detail">
                      <img src={testimonial.logo} alt="Company Logo" />
                      <p>{testimonial.text}</p>
                      <span>{testimonial.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Company Details */}
          <div className="company-details--row">
            <Swiper
              key={swiperKey}
              modules={[Autoplay]}
              spaceBetween={30}
              speed={3000}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                reverseDirection: true, // Reverse the autoplay direction
              }}
              dir={language === "ar" ? "rtl" : "ltr"}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {companies[language].map((company, index) => (
                <SwiperSlide key={index}>
                  <div className="company-box">
                    <div className="company-box-inner">
                      <div className="company-box-top">
                        <img
                          src={company.logo}
                          alt="Company Logo"
                          style={{
                            width: "33%",
                            height: "100px",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                      <div className="company-box-bottom">
                        <span>{company.text}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
