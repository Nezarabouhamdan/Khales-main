import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Accordion, Stack } from "rsuite";
import "rsuite/Accordion/styles/index.css";
import "./animation.css";
import styled from "styled-components";
import { AllProjectsLink } from "../Latest Projects/LatestProjectsStyles";
import { useLanguage } from "../../Context/Languagecontext";

// Container for the row
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Wrapper for the accordion
const OurProcessWrapper = styled.div`
  width: 50%; // Fixed width for the accordion
  margin: 0;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

// Wrapper for the image
const ImageWrapper = styled.div`
  width: 400px; // Set a fixed width (adjust as needed)
  height: 300px; // Set a fixed height (adjust as needed)
  overflow: hidden; // Ensure the image doesn't overflow the container
  @media (max-width: 968px) {
    width: 100%; // Full width on smaller screens
    height: auto; // Adjust height for responsiveness
  }
`;
const StyledAccordion = styled(Accordion)`
  width: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  align-items: center;
`;

const HeaderNumber = styled.div`
  margin-right: 50px;
  font-family: "Inter ExtraLight", sans-serif;
  font-weight: 200;
  font-size: 24px;
  line-height: 36px;
  color: rgb(153, 153, 153);

  @media (max-width: 968px) {
    margin-right: 20px;
    font-size: 18px;
    line-height: 27px;
  }
`;

const HeaderTitle = styled.div`
  font-family: "Inter ExtraLight", sans-serif;
  font-weight: 100;
  font-size: 24px;
  line-height: 28.8px;
  color: ${({ isActive }) => (isActive ? "#66a109" : "black")};

  @media (max-width: 968px) {
    font-size: 18px;
    line-height: 21.6px;
  }
`;

const HeaderContainer = styled(Stack)`
  width: 100%;
`;

const PanelContent = styled.div`
  padding: 10px;
  color: grey;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  white-space: pre-line;
  @media (max-width: 968px) {
    font-size: 14px;
  }
`;

const HeaderComponent = ({ isActive, eventKey, title, language, ...rest }) => (
  <HeaderContainer
    spacing={10}
    alignItems="flex-start"
    direction="row"
    justifyContent="space-between"
    {...rest}
  >
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <HeaderRow rtl={language === "ar"}>
        <HeaderNumber>
          {language === "ar"
            ? `/${parseInt(eventKey, 10) + 1}`
            : `${parseInt(eventKey, 10) + 1}/`}
        </HeaderNumber>
        <HeaderTitle isActive={isActive}>{title}</HeaderTitle>
      </HeaderRow>
    </Stack>
  </HeaderContainer>
);

function OurProcessWork({ panels, button }) {
  const [activeKey, setActiveKey] = useState(null);
  const { language } = useLanguage();
  const handleSelect = (key) => {
    setActiveKey(key === activeKey ? null : key); // Toggle active state
  };

  return (
    <OurProcessWrapper>
      <StyledAccordion activeKey={activeKey} onSelect={handleSelect}>
        {panels.map((panel, index) => (
          <Accordion.Panel
            key={index}
            header={
              <HeaderComponent
                language={language}
                title={panel.title}
                isActive={activeKey === index.toString()}
                eventKey={index.toString()}
              />
            }
            eventKey={index.toString()}
          >
            <CSSTransition
              in={activeKey === index.toString()}
              timeout={1000}
              classNames="fade"
              unmountOnExit
            >
              <PanelContent rtl={language === "ar"}>
                {panel.content}
              </PanelContent>
            </CSSTransition>
          </Accordion.Panel>
        ))}
      </StyledAccordion>
      {button === true && (
        <AllProjectsLink to={"/projects"} style={{ marginTop: "50px" }}>
          More Details
        </AllProjectsLink>
      )}
    </OurProcessWrapper>
  );
}

export default OurProcessWork;
