import React, { useState } from "react";
import Contact from "./contact";
import Education from "./education";
import Programming from "./programming";
import Addison from "./addison";
import Armorblox from "./armorblox";
import Taskade from "./taskade";
import FlockSupport from "./flocksupport";

import {
  Container,
  Body,
  Hero,
  BottomLeftCircle,
  BottomRightCircle,
  Highlight,
  HeroWrapper,
  TopLeftCircle,
  TopRightCircle,
  RightSection,
  LeftSection,
  GlobalStyle,
} from "../styles/index.styled";

const IndexPage = () => {
  const [hover, setHover] = useState("addison");
  let leftContent = null;

  if (hover === "flocksupport") {
    leftContent = <FlockSupport />;
  } else if (hover === "taskade") {
    leftContent = <Taskade />;
  } else if (hover === "armorblox") {
    leftContent = <Armorblox />;
  } else if (hover === "addison") {
    leftContent = <Addison />;
  } else if (hover === "programming") {
    leftContent = <Programming />;
  } else if (hover === "education") {
    leftContent = <Education />;
  } else if (hover === "contact") {
    leftContent = <Contact />;
  }

  return (
    <Container>
      <GlobalStyle />
      <Body>
        <TopLeftCircle />
        <TopRightCircle />
        <BottomLeftCircle />
        <BottomRightCircle />
        <RightSection>
          <HeroWrapper
            onMouseEnter={() => setHover("flocksupport")}
            hover={hover === "flocksupport"}
          >
            <Hero>FLOCKSUPPORT</Hero>
            <Highlight />
          </HeroWrapper>
          <HeroWrapper
            onMouseEnter={() => setHover("taskade")}
            hover={hover === "taskade"}
          >
            <Hero>TASKADE</Hero>
            <Highlight />
          </HeroWrapper>
          <HeroWrapper
            onMouseEnter={() => setHover("armorblox")}
            hover={hover === "armorblox"}
          >
            <Hero>ARMORBLOX</Hero>
            <Highlight />
          </HeroWrapper>
          <HeroWrapper
            onMouseEnter={() => setHover("addison")}
            hover={hover === "addison"}
          >
            <Hero>ADDISON</Hero>
            <Highlight />
          </HeroWrapper>
          <HeroWrapper
            onMouseEnter={() => setHover("programming")}
            hover={hover === "programming"}
          >
            <Hero>PROGRAMMING</Hero>
            <Highlight />
          </HeroWrapper>
          <HeroWrapper
            onMouseEnter={() => setHover("education")}
            hover={hover === "education"}
          >
            <Hero>EDUCATION</Hero>
            <Highlight />
          </HeroWrapper>
          <HeroWrapper
            onMouseEnter={() => setHover("contact")}
            hover={hover === "contact"}
          >
            <Hero>CONTACT</Hero>
            <Highlight />
          </HeroWrapper>
        </RightSection>
        <LeftSection>{leftContent}</LeftSection>
      </Body>
    </Container>
  );
};

export default IndexPage;
