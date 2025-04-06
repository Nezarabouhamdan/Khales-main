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
import { slides } from "../data/Bcdata";
import { Helmet } from "react-helmet-async";

const data = {
  eng: [
    {
      title: "Building Contracting: ",
      subtitle: "Where Vision Meets Precision",
      description1:
        "Construction is more than just putting up walls—it’s about crafting spaces that tell a story. We specialize in delivering high-quality building contracting services for commercial developments, luxury residences, and custom interiors across Dubai and the UAE. With a team of seasoned professionals, innovative techniques, and a commitment to sustainability, we ensure your project is built to last.",
      description2:
        "From the first blueprint to the final brick, we handle every detail with precision and care. Whether it’s a state-of-the-art office, a stunning villa, or a bespoke interior, we’re here to turn your vision into a reality that exceeds expectations.",
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
      title: "مقاولات البناء:",
      subtitle: " حيث تلتقي الرؤية بالدقة",

      description1:
        "البناء ليس مجرد إقامة جدران، بل هو فن صياغة مساحات تروي قصة. نحن متخصصون في تقديم خدمات مقاولات بناء عالية الجودة للمشروعات التجارية، والمساكن الفاخرة، والتصاميم الداخلية المخصصة في دبي وجميع أنحاء الإمارات العربية المتحدة. يتميز فريقنا بالخبرة الواسعة واعتماد أحدث التقنيات، مع التزام قوي بمبادئ الاستدامة، لضمان تنفيذ مشاريع تدوم طويلًا وتعكس رؤية عملائنا بدقة.",
      description2:
        "من أول مخطط إلى آخر لبنة، نتولى جميع التفاصيل بعناية فائقة ودقة متناهية. سواء كان المشروع مكتبًا حديثًا، فيلا فاخرة، أو تصميم داخلي مخصص، فإننا نسعى إلى تحويل رؤيتك إلى واقع يتجاوز التوقعات.",
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
      title: "Pre-Construction Planning",
      content:
        "We kick off with feasibility studies, cost analysis, and constructability reviews to set the stage for a seamless transition from design to construction.",
    },
    {
      title: "Construction Execution",
      content:
        "Our expertise spans foundation work, structural framing, MEP installations, and architectural finishes, ensuring every detail meets the highest standards of quality and durability.",
    },
    {
      title: "Project Management",
      content:
        "Our dedicated project managers oversee every aspect, ensuring timelines, budgets, and quality standards are met while keeping you in the loop at every step.",
    },
    {
      title: "Interior Fit-Out",
      content:
        "We partner with top interior designers to transform spaces into functional and visually stunning environments, handling everything from flooring to final touches.",
    },
    {
      title: "Sustainable Construction",
      content:
        "We integrate eco-friendly materials and energy-efficient practices to minimize environmental impact, ensuring your project is as sustainable as it is stunning.",
    },
  ],
  ar: [
    {
      title: " التخطيط المسبق للبناء ",
      content:
        "تبدأ كل مشاريعنا بتخطيط دقيق يضمن الانتقال السلس من مرحلة التصميم إلى مرحلة البناء. نقوم بإجراء دراسات جدوى شاملة تتضمن تحليل التكاليف ومراجعات إمكانية التنفيذ لتجنب أي عقبات غير متوقعة. نعتمد على نهج شامل يغطي جميع الجوانب الفنية والمالية، مما يضمن وضع أسس قوية تساهم في تقليل المخاطر وضمان نجاح المشروع.",
    },
    {
      title: "تنفيذ أعمال البناء ",
      content:
        "تشمل خدماتنا جميع مراحل البناء بدءًا من الأساسات القوية إلى التشطيبات المعمارية النهائية. يتولى فريقنا المحترف تنفيذ الأعمال الإنشائية، بما في ذلك الهياكل الأساسية، والأنظمة الكهربائية والميكانيكية والسباكة (MEP)، ووصولًا إلى التشطيبات المعمارية التي تعزز جمال المشروع. نحرص على استخدام مواد بناء موثوقة وتقنيات تنفيذ حديثة تضمن جودة ومتانة عالية تواكب أعلى المعايير العالمية.",
    },
    {
      title: "إدارة المشاريع ",
      content:
        "يشرف فريقنا من مديري المشاريع المحترفين على جميع مراحل العمل، مع التركيز على الالتزام بالجداول الزمنية ومراقبة الجودة بشكل دقيق. نتبع أفضل الممارسات في إدارة المشاريع لضمان سير العمل بسلاسة وكفاءة. نبقيك على اطلاع دائم بكل تفاصيل المشروع من خلال تقارير تقدم منتظمة، مما يضمن تحقيق رؤيتك بأفضل صورة ممكنة.",
    },
    {
      title: "التجهيزات الداخلية ",
      content:
        "نتعاون مع أفضل المصممين الداخليين لتحويل المساحات إلى بيئات عملية وجذابة بصريًا. نقدم خدمات التجهيز الداخلي التي تشمل الأرضيات، الأعمال الخشبية، التشطيبات الجدارية، والإضاءة المتكاملة، مما يضمن توازنًا مثاليًا بين الجمال والوظيفة. نعمل على دمج التصميم مع التطبيق الفعلي لتحقيق نتائج متميزة تلبي توقعاتك.",
    },
    {
      title: " البناء المستدام  ",
      content:
        "ندرك أهمية البناء المستدام في مواجهة التحديات البيئية، لذا نحرص على استخدام مواد صديقة للبيئة وتطبيق تقنيات توفير الطاقة في جميع مشاريعنا. نتبع استراتيجيات البناء الأخضر لتقليل البصمة الكربونية والحفاظ على الموارد الطبيعية، مما يعزز من استدامة المشروع وضمان مستقبل أفضل.",
    },
  ],
};
const Faq = {
  eng: [
    {
      title: "What types of building contracting services do you offer?",
      content:
        "We offer pre-construction planning, building construction, project management, interior fit-out, and sustainable construction solutions.",
    },
    {
      title: " Do you work on projects across all seven emirates?",
      content:
        "Yes, we provide building contracting services in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Fujairah, Al Ain, and Ras Al Khaimah.",
    },
    {
      title: "How do you ensure quality in your projects?",
      content:
        "We use high-quality materials, employ skilled craftsmen, and implement rigorous quality control measures to ensure exceptional results.",
    },
    {
      title: "Can you handle both small and large-scale projects?",
      content:
        "Absolutely. Whether it’s a small villa or a large commercial complex, we tailor our services to meet the scale and scope of your project.",
    },
    {
      title: " Do you offer sustainable construction solutions?",
      content:
        "Yes, we integrate eco-friendly materials and energy-efficient practices to minimize environmental impact and align with the UAE’s sustainability goals.",
    },
    {
      title: "How long does the construction process take?",
      content:
        "The timeline depends on the project’s complexity. After the initial consultation, we provide a detailed schedule to keep you informed every step of the way.",
    },
    {
      title: " Do you provide project management services?",
      content:
        "Yes, our experienced project managers oversee every aspect of the construction process, ensuring timely and budget-friendly delivery.",
    },
    {
      title: "Can you work within my budget?",
      content:
        "We create plans that align with your budget without compromising on quality. During the consultation, we discuss your financial parameters and tailor our solutions accordingly.",
    },
    {
      title: " What makes your building contracting services stand out?",
      content:
        "Our commitment to precision, innovation, and excellence sets us apart. We combine award-winning expertise with a client-centric approach to deliver exceptional results.",
    },
    {
      title: "How can I get started with Khales Building Contracting?",
      content:
        "Simply contact us for a consultation. We’ll discuss your vision, provide a customized plan, and guide you through the process of creating your dream project.",
    },
  ],
  ar: [
    {
      title: " ما هي أنواع خدمات مقاولات البناء التي تقدمونها؟",
      content:
        "نحن نقدم خدمات التخطيط المسبق للبناء، وأعمال البناء الأساسية، وإدارة المشاريع، وتجهيزات الديكور الداخلي، وحلول البناء المستدام.",
    },
    {
      title: " هل تعملون على مشاريع في جميع الإمارات السبع؟",
      content:
        "نعم، نقدم خدمات مقاولات البناء في كافة أنحاء دولة الإمارات العربية المتحدة، بما في ذلك دبي، أبوظبي، الشارقة، عجمان، أم القيوين، الفجيرة، العين، ورأس الخيمة.",
    },
    {
      title: " كيف تضمنون جودة المشاريع؟",
      content:
        "نستخدم مواد بناء عالية الجودة ونعتمد على فريق من الحرفيين المهرة، بالإضافة إلى تطبيق إجراءات رقابية صارمة لضمان التميز في كل مرحلة من مراحل التنفيذ.",
    },
    {
      title: " هل يمكنكم التعامل مع المشاريع الصغيرة والكبيرة؟",
      content:
        "نعم، سواء كان المشروع عبارة عن فيلا صغيرة أو مجمع تجاري كبير، نحن نقدم حلولاً مخصصة تناسب حجم المشروع وتعقيداته.",
    },
    {
      title: "هل تقدمون حلول بناء مستدامة؟",
      content:
        "نعم، ندمج حلول البناء المستدام باستخدام مواد صديقة للبيئة وتقنيات موفرة للطاقة، بما يتماشى مع رؤية دولة الإمارات في الحفاظ على البيئة.",
    },
    {
      title: " كم تستغرق عملية البناء؟",
      content:
        "يعتمد الوقت على مدى تعقيد المشروع وحجمه. بعد الاستشارة الأولية، نقدم جدولًا زمنيًا مفصلًا يتضمن جميع المراحل والإجراءات لضمان الشفافية.",
    },
    {
      title: "هل تقدمون خدمات إدارة المشاريع؟",
      content:
        "نعم، يتولى فريقنا من مديري المشاريع جميع المهام المتعلقة بالتخطيط والتنفيذ، مما يضمن تسليم المشروع في الوقت المحدد وضمن الميزانية المقررة.",
    },
    {
      title: " هل يمكنكم العمل ضمن ميزانيتي؟",
      content:
        "نعم، نقوم بتصميم خطط تنفيذ تتماشى مع ميزانيتك دون المساس بالجودة. خلال الاستشارة، نناقش التفاصيل المالية لتقديم حلول تناسب احتياجاتك.",
    },
    {
      title: "ما الذي يميز خدمات مقاولات البناء لديكم؟",
      content:
        "نحن نلتزم بالدقة والابتكار في جميع جوانب العمل، مع التركيز على تقديم حلول هندسية متقدمة تجمع بين الجودة والاستدامة. كما أن نهجنا المتمحور حول العملاء يضمن رضاهم التام في جميع مراحل المشروع.",
    },
    {
      title: 'كيف يمكنني البدء مع "خالص لمقاولات البناء"؟',
      content:
        "يمكنك التواصل معنا لترتيب استشارة شاملة. سنتحدث معك لفهم رؤيتك، ونضع خطة مخصصة لتنفيذ مشروعك بأعلى معايير الجودة والاحترافية.",
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

function Bulidingcontracting() {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage(); // Assuming you have a language context

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>
          {language === "ar" ? "مقاولات البناء" : "Buliding contracting"}{" "}
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
    </div>
  );
}

export default Bulidingcontracting;
