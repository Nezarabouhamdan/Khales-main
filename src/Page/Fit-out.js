import React, { useEffect, useState } from "react";
import InteriorDesign from "../components/InteriorDesign/InteriorDesign";
import HeroSlider from "../components/Slider/Slider";
import OurProcessWork from "../components/OurProcessWork/OurProcessWork";
import { Row2, Button2, Column } from "../Globalstyles";
import img from "../assets/4.png";
import img2 from "../assets/Black White Tan Minimal Bold FAQ Search Bar Instagram Story.png";
import { GreenText, Title as Title2 } from "../components/Whoweare/TextContent";
import CTASection from "../components/Homecontact/CTASection";
import ProjectHighlight from "../components/Projecthighlights/ProjectHighlight";
import styled from "styled-components";
import { useLanguage } from "../Context/Languagecontext"; // Import the language context
import { Helmet } from "react-helmet-async";

export const slides = {
  eng: [
    {
      id: 1,
      image:
        "https://i.ibb.co/DPKhyq7k/khales-ae-real-photograph-of-a-super-luxury-modern-mansion-fr-c2c57d33-5a47-4ccb-b054-498b16745d23-3.png",
      title: "Transform Your Space with Premium Fit-Out",
      content: "Seamless interior solutions for homes and businesses.",
      button: "Revamp Your Space",
    },
  ],
  ar: [
    {
      id: 1,
      image:
        "https://i.ibb.co/DPKhyq7k/khales-ae-real-photograph-of-a-super-luxury-modern-mansion-fr-c2c57d33-5a47-4ccb-b054-498b16745d23-3.png",
      title: "حوّل مساحتك بتجهيز داخلي فاخر",
      content: "حلول داخلية متكاملة للمنازل والأعمال",
      button: "جدّد مساحتك",
    },
  ],
};
const data = {
  eng: [
    {
      title: "Custom Interior Design ",
      subtitle: "and Fit-Out Services to Simplify Your Project",
      description1:
        "At Khales, we go beyond traditional interior fit-out services to deliver custom solutions that make your project effortless and exceptional. Whether you're envisioning a dynamic office space that fosters creativity and productivity or a luxurious home that exudes comfort and sophistication, we craft spaces that truly reflect your unique identity and lifestyle.",
      description2:
        "Our comprehensive interior fit-out services are designed to meet the diverse needs of both commercial and residential projects. We utilize the latest technologies and premium-quality materials to ensure top-tier results that not only meet but exceed expectations. With a meticulous approach to every detail, our expert team transforms ideas into reality—creating beautiful, functional, and inviting spaces that leave a lasting impression.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee56b6848a5668fe4c1e75c526f9ae88908da749",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83d057c657e643f783b5365240986c54a25d86a4",
        "https://brabbu.com/blog/wp-content/uploads/2021/02/Aati-tayer-dubai.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d1c74189930427.65b294ce482ca.jpg",
      ],
    },
  ],
  ar: [
    {
      title: "التجهيز الداخلي: ",
      subtitle: "تجارب معيشية تلبي احتياجاتك",

      description1:
        "في خالص، نحن لا نقدم مجرد خدمات تجهيز داخلي، بل نصمم مساحات تعبّر عن هويتك وتروي قصة أسلوب حياتك. نهدف إلى تحويل المساحات الداخلية إلى تجارب معيشية متميزة تعكس الفخامة والعملية في آن واحد. سواء كنت تبحث عن تصميم مكتب عمل ديناميكي يعزز التعاون والإبداع، أو منزل يعبر عن راحتك ورفاهيتك، نحن هنا لتحويل رؤيتك إلى واقع ينبض بالحياة.",
      description2:
        "نعتمد في جميع مشاريعنا على أحدث التقنيات والمواد عالية الجودة لتحقيق نتائج تتجاوز التوقعات. من خلال نهج مخصص يركز على التفاصيل، نقدم لك حلولاً إبداعية تجعل مساحتك تنبض بالجمال والتميز.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee56b6848a5668fe4c1e75c526f9ae88908da749",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83d057c657e643f783b5365240986c54a25d86a4",
        "https://brabbu.com/blog/wp-content/uploads/2021/02/Aati-tayer-dubai.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d1c74189930427.65b294ce482ca.jpg",
      ],
    },
  ],
};

const process = {
  eng: [
    {
      title: "Consultation & Design",
      content:
        "We start the interior fit-out process with an in-depth consultation to understand your vision and specific requirements. Our team of professional designers analyzes the space and delivers inspiring design concepts that align with your expectations. We prepare 3D renderings and design boards to ensure complete clarity before moving forward with execution.",
    },
    {
      title: "Space Planning & Optimization",
      content:
        "We maximize the efficiency and elegance of your space through thoughtful planning and strategic layout optimization. Our approach ensures a seamless balance between practicality and aesthetics, giving you a functional and beautiful environment that truly works for you.",
    },
    {
      title: "Fit-Out & Execution",
      content:
        "Once the design is finalized, we move to the execution phase, carefully selecting materials and furnishings to match the agreed-upon design. Our skilled team handles flooring, walls, ceilings, and custom furniture installations with meticulous attention to detail, ensuring a cohesive and harmonious final look.",
    },
    {
      title: " Supervision & Quality Assurance",
      content:
        "Our experienced project managers oversee the entire process, maintaining strict quality control throughout every stage. We conduct regular inspections and reviews to address challenges proactively and keep the project aligned with both timeline and budget.",
    },
    {
      title: " Final Touches & Handover",
      content:
        "When the fit-out is complete, we add the finishing touches—lighting, artwork, and accessories that highlight the design’s beauty. We conduct a final walkthrough with the client to ensure satisfaction and provide ongoing support for any future maintenance needs.",
    },
  ],
  ar: [
    {
      title: "الاستشارة والتصميم",
      content:
        "نبدأ عملية التجهيز الداخلي من خلال جلسة استشارية لفهم رؤيتك ومتطلباتك الخاصة. يقوم فريقنا من المصممين المحترفين بتحليل المساحة وتقديم أفكار تصميمية ملهمة تتماشى مع توقعاتك. يتم إعداد رسومات ثلاثية الأبعاد ولوحات تصميم تضمن وضوح الرؤية قبل بدء التنفيذ.",
    },
    {
      title: "التخطيط وتنظيم المساحات",
      content:
        "نحرص على استغلال المساحة بشكل فعال من خلال إعادة ترتيب الفراغات وتنظيمها بأسلوب يحقق أقصى قدر من الراحة والجمال. نقوم بتطوير خطط تخطيط متكاملة تجمع بين العملية والجماليات، مما يضمن تصميمًا يلبي احتياجاتك الوظيفية.",
    },
    {
      title: "التجهيز الداخلي والتنفيذ",
      content:
        "نبدأ مرحلة التنفيذ باختيار المواد والأثاث بعناية فائقة، مع الالتزام بأعلى معايير الجودة. تشمل العملية تركيب الأرضيات، الجدران، الأسقف، والأثاث بما يتناسب مع التصميم المتفق عليه. يتم التركيز على التفاصيل الدقيقة لضمان تحقيق تكامل وانسجام في كل زاوية.",
    },
    {
      title: "الإشراف وضمان الجودة",
      content:
        "يقوم فريقنا من مديري المشاريع المتخصصين بالإشراف على كافة مراحل التجهيز، لضمان سير العمل وفق الخطة الزمنية والميزانية المحددة. يتم إجراء مراجعات دورية لضمان الجودة ومعالجة أي تحديات تظهر أثناء التنفيذ.",
    },
    {
      title: " التشطيب والتسليم ",
      content:
        "بعد الانتهاء من التجهيز، نقوم بإضافة اللمسات النهائية من إضاءة، أعمال فنية، وإكسسوارات تبرز جمال التصميم. نقوم بجولة تفقدية مع العميل للتأكد من رضاهم الكامل عن المشروع النهائي، مع تقديم الدعم في الصيانة المستقبلية.",
    },
  ],
};
const Faq = {
  eng: [
    {
      title: "What types of projects can you handle?",
      content:
        "We offer interior fit-out services for both commercial and residential projects, including offices, retail spaces, hotels, homes, and cafes.",
    },
    {
      title: "Can you handle interior redesign and renovation projects?",
      content:
        "Absolutely. We specialize in interior redesign and renovation, transforming outdated or underutilized spaces into modern, comfortable, and stylish environments that align with current trends.",
    },
    {
      title: "How do you ensure quality at every stage?",
      content:
        "We maintain rigorous quality control standards and our dedicated project managers ensure every aspect of the project meets high-quality benchmarks. We use premium materials and advanced techniques to guarantee flawless execution.",
    },
    {
      title:
        "Can you provide tailored services to match my style and preferences?",
      content:
        "Yes, our approach is always client-focused and fully customized. We work closely with you to understand your vision and ensure that every detail aligns with your personal taste and functional needs.",
    },
    {
      title: "How can I get started with my interior fit-out project?",
      content:
        "It’s simple! Just reach out to us to schedule an initial consultation. We’ll listen to your ideas, discuss your goals, and develop a customized plan to turn your vision into reality. At Khales, we’re committed to transforming your space into a living experience that exceeds your expectations.",
    },
  ],
  ar: [
    {
      title: "ما هي أنواع المشاريع التي يمكنكم تجهيزها؟",
      content:
        "نحن نقدم خدمات التجهيز الداخلي لكل من المشاريع التجارية والسكنية، بما في ذلك المكاتب، المحلات التجارية، الفنادق، المنازل، والمقاهي.",
    },
    {
      title: " هل يمكنكم التعامل مع مشاريع تجديد التصميم الداخلي؟",
      content:
        "نعم، نقدم خدمات إعادة التصميم الداخلي لتحويل المساحات القديمة إلى أماكن حديثة ومريحة تتماشى مع أحدث اتجاهات التصميم.",
    },
    {
      title: "كيف تضمنون الجودة في جميع مراحل التنفيذ؟",
      content:
        "نحن نعتمد على معايير صارمة لمراقبة الجودة، مع إشراف دقيق من فريق إدارة المشاريع. نستخدم مواد عالية الجودة وتقنيات متقدمة لضمان تنفيذ دقيق وخالي من العيوب.",
    },
    {
      title: "هل يمكنكم تقديم خدمات مخصصة حسب ذوق العميل؟",
      content:
        "نعم، نحن نتبع نهجًا مخصصًا في التصميم لضمان توافق كل تفصيل مع رؤية العميل واحتياجاته. نعمل بشكل وثيق معك لضمان تحقيق النتائج التي تطمح إليها.",
    },
    {
      title: "كيف يمكنني البدء في مشروع التجهيز الداخلي معكم؟",
      content:
        "بكل بساطة، يمكنك التواصل معنا لتحديد موعد للاستشارة الأولية. سنستمع إلى رؤيتك ونقدم خطة مخصصة تناسب احتياجاتك. نحن هنا لتحقيق رؤيتك وتحويل مساحتك إلى تجربة معيشية فريدة.",
    },
  ],
};

const ProjectHighlightdata = {
  eng: [
    {
      Title: " Case Studies",
      button: " Get in touch with us",

      Subtitle: "Al Wasl Dubai",
      Subheader: "A Turnkey Success Story",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis id purus ut magna tincidunt luctus. Curabitur euismod, turpis ac eleifend congue, nunc justo sollicitudin est, ac fermentum lorem odio eget elit. Nulla facilisi. Phasellus aliquet, felis a consectetur volutpat, nisl magna malesuada dolor, ut scelerisque nisl nulla sit amet ligula. Fusce eget metus nec nunc eleifend facilisis ut nec justo. Integer bibendum, augue eu fermentum sodales, turpis leo pharetra ex, eget dictum sapien turpis eget nunc.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut sapien quis velit vestibulum accumsan vel at lectus. Ut ut nunc at turpis molestie dignissim eget in nunc. Morbi sodales, sapien non facilisis scelerisque, velit lacus eleifend risus, eu eleifend elit elit nec ligula. Mauris sagittis orci nec nisl lacinia, id sodales arcu aliquet. Suspendisse ac ligula ex. Vestibulum in metus non erat imperdiet convallis. Nulla sed libero a metus bibendum sagittis. Fusce vehicula orci id lacus feugiat, ut ultricies nulla lacinia.",
        "Nam venenatis, libero vel fermentum hendrerit, sapien mauris luctus tortor, id laoreet purus nisi non elit. Phasellus cursus, quam eget iaculis ultricies, lorem erat euismod orci, a ultrices justo enim eu dui. Etiam tincidunt felis id odio suscipit, nec aliquet nisl pharetra. Ut in scelerisque eros. Donec eget nisi congue, facilisis arcu eget, ullamcorper odio. Nunc vel nulla a neque elementum volutpat. Duis at velit eget libero interdum ultrices.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut sapien quis velit vestibulum accumsan vel at lectus. Ut ut nunc at turpis molestie dignissim eget in nunc. Morbi sodales, sapien non facilisis scelerisque, velit lacus eleifend risus, eu eleifend elit elit nec ligula. Mauris sagittis orci nec nisl lacinia, id sodales arcu aliquet. Suspendisse ac ligula ex. Vestibulum in metus non erat imperdiet convallis. Nulla sed libero a metus bibendum sagittis. Fusce vehicula orci id lacus feugiat, ut ultricies nulla lacinia.",
      ],
      mainimage: "https://placehold.co/400x300/eeeeee/eeeeee",
      images: [
        "https://placehold.co/400x300/eeeeee/eeeeee",
        "https://placehold.co/400x300/ffffff/ffffff",
        "https://placehold.co/400x300/8b4513/8b4513",
      ],
    },
  ],
  ar: [
    {
      Title: " دراسة المشروع",
      button: "تواصل معنا",
      Subtitle: "الوصل دبي",
      Subheader: "قصة نجاح مفتاح في اليد",
      description: [
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
      ],
      mainimage: "https://placehold.co/400x300/eeeeee/eeeeee",
      images: [
        "https://placehold.co/400x300/eeeeee/eeeeee",
        "https://placehold.co/400x300/ffffff/ffffff",
        "https://placehold.co/400x300/8b4513/8b4513",
      ],
    },
  ],
};

export const Column2 = styled.div`
  display: flex;
  width: ${({ rtl }) => (rtl ? "38vw" : "70vw")};
  flex-direction: column;
  margin-top: 30%;
  @media (max-width: 1200px) {
    width: 40vw;
    margin-right: 00px;
  }
  @media (max-width: 968px) {
    height: 50vh;
    margin-top: -15%;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    width: 100vw;

    margin-right: 0;
  }
`;

function Fitout() {
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
        <title>{language === "ar" ? "التجهيز الداخلي" : "Fit out"} </title>
        <meta name="description" content="Welcome to projects." />
      </Helmet>
      <HeroSlider
        slides={slides[language] || slides["eng"]}
        language={language}
        isLoading={isLoading}
        rtl={language === "ar"}
      />{" "}
      <InteriorDesign data={data[language]} />
      <Column>
        <Title2>
          {language === "ar" ? "عملية عملنا" : "Our Process"}
          <GreenText>{language === "ar" ? "" : " Work"}</GreenText>
        </Title2>
        <Row2 rtl={language === "ar"}>
          <OurProcessWork panels={process[language]} />
          <img width={"30%"} src={img} alt="Process Work" />
        </Row2>
        <ProjectHighlight data={ProjectHighlightdata[language]} />

        <Title2>
          {language === "ar" ? "عملية عملنا" : "Frequently Asked"}
          <GreenText>{language === "ar" ? "" : " Questions"}</GreenText>
        </Title2>

        <OurProcessWork panels={Faq[language]} />
      </Column>
      <CTASection />
    </>
  );
}

export default Fitout;
