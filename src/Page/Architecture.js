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
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../Context/Languagecontext"; // Import the language context
export const slides = {
  eng: [
    {
      id: 1,
      image:
        "https://i.ibb.co/DPKhyq7k/khales-ae-real-photograph-of-a-super-luxury-modern-mansion-fr-c2c57d33-5a47-4ccb-b054-498b16745d23-3.png",
      title: "Innovative Architectural Design That Inspires",
      content:
        "Crafting functional and aesthetic spaces with precision and creativity",
      button: "Start Your Project",
    },
  ],
  ar: [
    {
      id: 1,
      image:
        "https://i.ibb.co/DPKhyq7k/khales-ae-real-photograph-of-a-super-luxury-modern-mansion-fr-c2c57d33-5a47-4ccb-b054-498b16745d23-3.png",
      title: "تصميم معماري ملهم ومبتكر",
      content: "نصمم مساحات عملية وجمالية بدقة وإبداع",
      button: "ابدأ مشروعك",
    },
  ],
};
const data = {
  eng: [
    {
      title: "Architectural Design:",
      subtitle: "Where Vision Meets Excellence",
      description1:
        "Great architecture is more than just buildings—it’s about creating spaces that inspire, function, and endure. We specialize in turning your architectural dreams into reality, blending precision engineering, luxurious design, and uncompromising excellence to craft spaces that are as functional as they are breathtaking. From modern villas to commercial masterpieces, we deliver innovative architectural solutions that redefine what’s possible.",
      description2:
        "Our team of passionate architects, engineers, and designers works closely with you to understand your vision, goals, and challenges. With a focus on creativity, sustainability, and attention to detail, we ensure every project reflects your unique style while meeting the highest standards of quality and performance.",
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
      title: "الهندسة المعمارية:",
      subtitle: "  أكثر من مجرد مبانٍ",

      description1:
        "الهندسة المعمارية الرائعة تتجاوز مجرد المباني، إنها تتعلق بخلق مساحات ملهمة، وظيفية، ودائمة. نحن متخصصون في تحويل أحلامكم المعمارية إلى واقع ملموس، من خلال الجمع بين الهندسة الدقيقة، والتصميم الفاخر، والتميز الذي لا يضاهى لصياغة مساحات عملية بقدر ما هي آسرة. من الفيلات الحديثة إلى التحف التجارية، نقدم حلولًا معمارية مبتكرة تعيد تعريف الممكن.",
      description2:
        "يعمل فريقنا من المهندسين المعماريين، والمهندسين، والمصممين المتحمسين معكم عن كثب لفهم رؤيتكم، وأهدافكم، وتحدياتكم. مع التركيز على الإبداع، والاستدامة، والاهتمام بالتفاصيل، نضمن أن يعكس كل مشروع أسلوبكم الفريد مع تلبية أعلى معايير الجودة والأداء.",
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
      title: "Consultation & Concept Development",
      content:
        "It all starts with a conversation. We listen to your ideas, goals, and challenges, then craft initial concepts, 3D renderings, and feasibility studies to visualize your dream project. This phase ensures that every detail aligns with your expectations and lays a solid foundation for a seamless design journey.\nCreative Brainstorming: Understanding your vision and goals.\n3D Renderings: Bringing ideas to life with detailed visualizations.\nFeasibility Analysis: Assessing the technical and financial viability.\nPersonalized Solutions: Crafting concepts that match your unique style.",
    },
    {
      title: "Architectural Engineering & Planning",
      content:
        "Precision is key. Our team of qualified architectural engineers ensures the structural integrity, safety, and sustainability of your project. We develop technically sound blueprints that comply with local regulations while maintaining aesthetic harmony. Our designs seamlessly integrate functionality and visual appeal, ensuring that your project not only looks stunning but also performs flawlessly.\nStructural Safety: Ensuring stability and resilience.\nEngineering Excellence: Balancing form and function.\nCode Compliance: Adhering to all local and international regulations.\nSustainability Integration: Incorporating eco-friendly practices.\n",
    },
    {
      title: "Exterior Architecture & Facade Design",
      content:
        "First impressions matter. We create visually striking exteriors that leave a lasting impact. Our architects focus on designing dynamic facades, entrances, and landscape integration that elevate the overall aesthetic appeal while complementing the surrounding environment. From modern villas to contemporary commercial spaces, our exterior architecture solutions make a statement of elegance and sophistication.\nFacade Design: Crafting iconic architectural statements.\nEntrance Aesthetics: Welcoming and impactful.\nOutdoor Integration: Blending architecture with natural surroundings.\nMaterials & Textures: Carefully selected for durability and visual appeal.",
    },
    {
      title: "Interior Design Integration",
      content:
        "Great architecture doesn't end at the exterior. Our award-winning interior design team collaborates with architects to create harmonious and functional interiors that mirror the architectural style. We ensure that every element—from furniture selection to material finishes—resonates with the overall concept, transforming each space into an inviting and luxurious experience.\nInterior Harmony: Matching design elements with architecture.\nCustom Design Solutions: Personalizing every aspect.Luxurious Detailing: Creating captivating living and working environments.\nSeamless Integration: Blending indoor and outdoor spaces.\n",
    },
    {
      title: "Project Management & Execution",
      content:
        "Execution is where vision meets reality. Our project managers oversee every stage of construction, from procurement to installation, ensuring on-time delivery and uncompromising quality. We coordinate with contractors, suppliers, and craftsmen to maintain the highest standards throughout the project lifecycle.\nEfficient Coordination: Ensuring smooth communication between all parties.\nQuality Assurance: Maintaining excellence at every step.\nBudget Control: Keeping your project on track financially.\nReal-Time Monitoring: Proactive problem-solving and adaptive management.",
    },
  ],
  ar: [
    {
      title: " فهم الرؤية وتصميم المفاهيم",
      content:
        "كل شيء يبدأ بمحادثة. نستمع إلى أفكاركم، وأهدافكم، وتحدياتكم، ثم نصوغ مفاهيم أولية، وتصاميم ثلاثية الأبعاد، ودراسات جدوى لتصور مشروع أحلامكم. تضمن هذه المرحلة توافق كل التفاصيل مع توقعاتكم ووضع أساس متين لرحلة تصميم سلسة.\nالعصف الذهني الإبداعي: فهم رؤيتكم وأهدافكم.\nتصاميم ثلاثية الأبعاد: تحويل الأفكار إلى واقع من خلال تصورات تفصيلية.\nتحليل الجدوى: تقييم الجدوى الفنية والمالية.\nحلول مخصصة: صياغة مفاهيم تتناسب مع أسلوبكم الفريد.\n",
    },
    {
      title: "الهندسة المعمارية والتخطيط",
      content:
        "الدقة هي المفتاح. يضمن فريقنا من المهندسين المعماريين المؤهلين السلامة الهيكلية، والسلامة، والاستدامة لمشروعكم. نطور مخططات تقنية سليمة تتوافق مع اللوائح المحلية مع الحفاظ على التناغم الجمالي. تدمج تصميماتنا بسلاسة بين الوظائف والجاذبية البصرية، مما يضمن أن مشروعكم لا يبدو مذهلاً فحسب، بل يؤدي وظيفته ببراعة أيضًا.\nالسلامة الهيكلية: ضمان الاستقرار والمتانة.\nالتميز الهندسي: الموازنة بين الشكل والوظيفة.\nالامتثال للوائح: الالتزام بجميع اللوائح المحلية والدولية.\nدمج الاستدامة: تضمين ممارسات صديقة للبيئة.\n",
    },
    {
      title: " التصميم الخارجي والواجهات المعمارية",
      content:
        "لانطباعات الأولى مهمة. نصنع تصميمات خارجية آسرة بصريًا تترك تأثيرًا دائمًا. يركز مهندسونا المعماريون على تصميم واجهات ديناميكية، ومداخل، وتكامل المناظر الطبيعية التي ترتقي بالجاذبية الجمالية العامة مع تكملة البيئة المحيطة. من الفيلات الحديثة إلى المساحات التجارية المعاصرة، تقدم حلولنا المعمارية الخارجية بيانًا بالأناقة والرقي.\nتصميم الواجهات: صياغة بيانات معمارية أيقونية.\nجماليات المداخل: تصميمات ترحيبية ومؤثرة.\nالتكامل الخارجي: مزج العمارة مع البيئة الطبيعية\n.المواد والتشطيبات: مختارة بعناية للمتانة والجاذبية البصرية.\n",
    },
    {
      title: "دمج التصميم الداخلي",
      content:
        "العمارة الرائعة لا تنتهي عند التصميم الخارجي. يتعاون فريق التصميم الداخلي الحائز على جوائز لدينا مع المهندسين المعماريين لإنشاء تصميمات داخلية متناغمة ووظيفية تعكس الأسلوب المعماري. نضمن أن كل عنصر، من اختيار الأثاث إلى تشطيبات المواد، يتردد صداه مع المفهوم العام، مما يحول كل مساحة إلى تجربة جذابة وفاخرة.\nالتناغم الداخلي: مطابقة عناصر التصميم مع العمارة.\nحلول تصميم مخصصة: تخصيص كل جانب.\nتفاصيل فاخرة: خلق بيئات معيشة وعمل آسرة.\nالتكامل السلس: مزج المساحات الداخلية والخارجية.\n",
    },
    {
      title: " إدارة المشاريع والتنفيذ ",
      content:
        "التنفيذ هو المكان الذي تلتقي فيه الرؤية بالواقع. يشرف مديرو المشاريع لدينا على كل مرحلة من مراحل البناء، من الشراء إلى التركيب، مما يضمن التسليم في الوقت المحدد والجودة التي لا تضاهى. ننسق مع المقاولين والموردين والحرفيين للحفاظ على أعلى المعايير طوال دورة حياة المشروع.\nالتنسيق الفعال: ضمان التواصل السلس بين جميع الأطراف.\nضمان الجودة: الحفاظ على التميز في كل خطوة.\nالتحكم في الميزانية: الحفاظ على مشروعكم ضمن المسار المالي.\nالمتابعة الفورية: حل المشكلات الاستباقي والإدارة التكيفية.\n",
    },
  ],
};
const Faq = {
  eng: [
    {
      title: "What types of architectural design services do you offer?",
      content:
        "We specialize in residential architecture (villas, apartments, custom homes), commercial architecture (offices, retail spaces, hospitality), and sustainable architecture. From concept to completion, we handle every detail.",
    },
    {
      title: " Do you work on projects across all seven emirates?",
      content:
        "Yes, we provide building contracting services in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Fujairah, Al Ain, and Ras Al Khaimah.",
    },
    {
      title: "How do you ensure the design reflects my vision?",
      content:
        "We start with a detailed consultation to understand your goals and preferences. Using 3D renderings and mood boards, we bring your vision to life before construction begins.",
    },
    {
      title: "Can you handle both small and large-scale projects?",
      content:
        "Absolutely. Whether it’s a small villa or a large commercial complex, we tailor our services to meet the scale and scope of your project.",
    },
    {
      title: " Do you offer sustainable architectural solutions?",
      content:
        "Yes, sustainability is a core part of our design philosophy. We integrate eco-friendly materials, energy-efficient systems, and sustainable practices into every project.",
    },
    {
      title: " How long does the architectural design process take",
      content:
        "The timeline depends on the project’s complexity. After the initial consultation, we provide a detailed schedule to keep you informed every step of the way.",
    },
    {
      title: "  What makes your architectural designs stand out?",
      content:
        "Our commitment to precision, luxury, and excellence sets us apart. We combine award-winning expertise with a client-centric approach to deliver exceptional results.",
    },
    {
      title: "Can you work within my budget?",
      content:
        "We create plans that align with your budget without compromising on quality. During the consultation, we discuss your financial parameters and tailor our solutions accordingly.",
    },

    {
      title: "How can I get started with Khales Building Contracting?",
      content:
        "Simply contact us for a consultation. We’ll discuss your vision, provide a customized plan, and guide you through the process of creating your dream project.",
    },
  ],
  ar: [
    {
      title: "  ما هي أنواع خدمات التصميم المعماري التي تقدمونها؟",
      content:
        "نحن متخصصون في التصميم السكني (الفيلات، الشقق، المنازل المخصصة)، والتصميم التجاري (المكاتب، المساحات التجارية، الضيافة)، بالإضافة إلى التصميم المستدام. نقدم خدمات متكاملة وشاملة، بدءًا من وضع المفهوم الأولي وحتى التنفيذ النهائي.",
    },
    {
      title: "هل تغطون جميع الإمارات السبع؟",
      content:
        "نعم، نحن نقدم خدمات التصميم المعماري في كل من دبي وأبوظبي والشارقة وعجمان وأم القيوين والفجيرة والعين ورأس الخيمة.",
    },
    {
      title: "إدارة المشاريع ",
      content:
        "يشرف فريقنا من مديري المشاريع المحترفين على جميع مراحل العمل، مع التركيز على الالتزام بالجداول الزمنية ومراقبة الجودة بشكل دقيق. نتبع أفضل الممارسات في إدارة المشاريع لضمان سير العمل بسلاسة وكفاءة. نبقيك على اطلاع دائم بكل تفاصيل المشروع من خلال تقارير تقدم منتظمة، مما يضمن تحقيق رؤيتك بأفضل صورة ممكنة.",
    },
    {
      title: "كيف تضمنون أن التصميم يعكس رؤيتي؟",
      content:
        "نبدأ باستشارة تفصيلية لفهم أهدافك وتفضيلاتك، ثم نستخدم تصاميم ثلاثية الأبعاد ولوحات إلهام لتحويل رؤيتك إلى واقع قبل البدء في التنفيذ.",
    },
    {
      title: " هل يمكنكم العمل على المشاريع الصغيرة والكبيرة؟ ",
      content:
        "بالتأكيد، سواء كانت شقة صغيرة أو مجمعًا تجاريًا ضخمًا، فإننا نُعدّل خدماتنا لتناسب حجم مشروعك ونطاقه.",
    },
    {
      title: "  هل تقدمون حلولًا معمارية مستدامة؟",
      content:
        "نعم، تُعدّ الاستدامة جزءًا أساسيًا من فلسفتنا في التصميم؛ إذ ندمج المواد الصديقة للبيئة، وأنظمة توفير الطاقة، وممارسات البناء المستدامة في كل مشروع.",
    },
    {
      title: "كم يستغرق تصميم المشروع؟",
      content:
        "يعتمد الجدول الزمني على مدى تعقيد المشروع. بعد الاستشارة الأولية، سنقدم لك جدولًا زمنيًا مفصلًا لإبقائك على اطلاع دائم بكل المستجدات.",
    },
    {
      title: " هل يمكنكم العمل ضمن ميزانيتي؟",
      content:
        "نعم، نصمم لك تصاميم تتناسب مع ميزانيتك دون التأثير على الجودة. خلال الاستشارة، نحدد سقف ميزانيتك ونقدم حلولًا مخصصة تلائمها.",
    },
    {
      title: " ما الذي يميز تصاميمكم المعمارية؟",
      content:
        "إن التزامنا بالدقة والفخامة والتميز هو ما يميزنا. نحن نجمع بين خبرتنا الحائزة على الجوائز ونهج يركز على العملاء لتحقيق نتائج استثنائية.",
    },
    {
      title: "كيف يمكنني بدء مشروعي معكم؟",
      content:
        "تواصل معنا لحجز استشارة لمناقشة رؤيتك وتقديم خطة مخصصة لإرشادك خلال عملية إنشاء المساحة التي تحلم بها.",
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

function Architecture() {
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
        <title>
          {language === "ar" ? "الهندسة المعمارية" : "Architecture"}{" "}
        </title>
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

export default Architecture;
