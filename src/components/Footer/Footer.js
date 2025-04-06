import React from "react";
import styled from "styled-components";
import logo from "../../assets/Khales Logo.png";
import { footerSocialData } from "../../data/FooterData";
import { FooterLogo, FooterSocialIcon, SocialIcon } from "./FooterStyles";
import { Row2 } from "../../Globalstyles";
import backgroundImage from "../../assets/Group.png"; // Adjust the path to your image
import { useLanguage } from "../../Context/Languagecontext"; // Import the language context

// Branch data
const branches = {
  eng: [
    {
      name: "Dubai Majlis",
      address: [
        "Office M03, Building 5, Block B",
        "Design District, Dubai, UAE",
      ],
      phone: "+971 4 123 1234",
    },
    {
      name: "Dubai Branch",
      address: ["Office 113, SIT Tower", "Dubai Silicon Oasis, Dubai, UAE"],
      phone: "+971 4 123 1234",
    },
    {
      name: "Sharjah Branch",
      address: [
        "Shop 11, Block C, Al Saud Head Office, Shk Khalifa",
        "Bin Zayed Al Nahyan Road, Muwaileh Commercial, Sharjah, UAE",
      ],
      phone: "+971 6 123 1234",
    },
    {
      name: "Abu Dhabi Branch",
      address: ["Al Qana, Rabdan, Abu Dhabi, UAE"],
      phone: "+971 56 189 9918",
    },
    {
      name: "Fujairah Branch",
      address: [
        "Office 202, Creative Tower Hamad Bin Abdulla St. Fujairah, UAE",
      ],
      phone: "+971 9 123 1234",
    },
  ],
  ar: [
    {
      name: "مجلس دبي",
      address: ["مكتب M03، مبنى 5، بلوك B", "منطقة التصميم، دبي، الإمارات"],
      phone: "+971 4 123 1234",
    },
    {
      name: "فرع دبي",
      address: ["مكتب 113، برج SIT", "واحة دبي للسيليكون، دبي، الإمارات"],
      phone: "+971 4 123 1234",
    },
    {
      name: "فرع الشارقة",
      address: [
        "متجر 11، بلوك C، المقر الرئيسي لآل سعود، شارخ خليفة",
        "طريق بن زايد آل نهيان، المنطقة التجارية مويلح، الشارقة، الإمارات",
      ],
      phone: "+971 6 123 1234",
    },
    {
      name: "فرع أبوظبي",
      address: ["القناة، ربدان، أبوظبي، الإمارات"],
      phone: "+971 56 189 9918",
    },
    {
      name: "فرع الفجيرة",
      address: [
        "مكتب 202، برج كرييتيف، شارع حمد بن عبدالله، الفجيرة، الإمارات",
      ],
      phone: "+971 9 123 1234",
    },
  ],
};

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BranchItem = styled.div`
  line-height: 1.6;
`;

const BranchName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #545454;
  text-align: ${({ language }) =>
    language === "ar" ? "right" : "left"}; // RTL support
`;

const AddressText = styled.p`
  font-size: 0.9rem;
  color: black;
  margin: 0.2rem 0;
  text-align: ${({ language }) =>
    language === "ar" ? "right" : "left"}; // RTL support
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;
  text-align: ${({ language }) =>
    language === "ar" ? "right" : "left"}; // RTL support

  &:hover {
    color: #66a109;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: #66a109;
  color: white;
  width: 250px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  &:hover {
    background: rgb(0, 0, 0);
  }
`;

const FooterContainer = styled.footer`
  background: #f8f9fa;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center left;
    background-repeat: no-repeat;
    z-index: 0;

    @media (max-width: 768px) {
      width: 100%;
      left: 0;
      background-position: center;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: auto auto auto auto;
  display: flex;
  gap: 5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1054px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  const { language } = useLanguage(); // Get the current language

  return (
    <FooterContainer>
      <ContentWrapper>
        {/* Logo Section */}
        <FooterLogo>
          <SocialIcon src={logo}></SocialIcon>
        </FooterLogo>

        {/* Branches Columns */}
        <Column>
          {branches[language].slice(0, 2).map((branch) => (
            <BranchItem key={branch.name}>
              <BranchName language={language}>{branch.name}</BranchName>
              {branch.address.map((line, index) => (
                <AddressText key={index} language={language}>
                  {line}
                </AddressText>
              ))}
              <AddressText language={language}>{branch.phone}</AddressText>
            </BranchItem>
          ))}
        </Column>

        <Column>
          {branches[language].slice(2, 4).map((branch) => (
            <BranchItem key={branch.name}>
              <BranchName language={language}>{branch.name}</BranchName>
              {branch.address.map((line, index) => (
                <AddressText key={index} language={language}>
                  {line}
                </AddressText>
              ))}
              <AddressText language={language}>{branch.phone}</AddressText>
            </BranchItem>
          ))}
        </Column>

        {/* Contact Column */}
        <Column>
          <BranchItem>
            <BranchName language={language}>
              {branches[language][4].name}
            </BranchName>
            {branches[language][4].address.map((line, index) => (
              <AddressText key={index} language={language}>
                {line}
              </AddressText>
            ))}
            <AddressText language={language}>
              {branches[language][4].phone}
            </AddressText>
          </BranchItem>

          <ContactSection>
            <BranchName language={language}>
              {language === "ar" ? "اتصل بنا" : "Contact Us"}
            </BranchName>
            <ContactLink href="mailto:info@khales.ae" language={language}>
              info@khales.ae
            </ContactLink>
            <AddressText language={language}>+971 52 123 1234</AddressText>
          </ContactSection>

          <Row2 justify="flex-start" margin="auto  0 0 0" gap="1rem">
            {footerSocialData.map((social, index) => (
              <FooterSocialIcon
                key={index}
                href={social.link}
                target="_blank"
                aria-label={social.name}
              >
                {social.icon}
              </FooterSocialIcon>
            ))}
          </Row2>

          <DownloadButton href="#download" download>
            {language === "ar"
              ? "تحميل ملف الشركة"
              : "Download Company Profile"}
          </DownloadButton>
        </Column>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
