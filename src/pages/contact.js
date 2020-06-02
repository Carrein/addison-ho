import React from "react";

import {
  Text,
  SubText,
  Caret,
  CaretTextWrapper,
  StyledDownload,
} from "./index.styled";

const Contact = () => {
  return (
    <>
      <Text>Stalk me here.</Text>
      <br />
      <CaretTextWrapper href="https://www.github.com/carrein">
        <SubText>Github</SubText>
        <Caret />
      </CaretTextWrapper>
      <CaretTextWrapper href="https://www.linkedin.com/in/addison-ho-ab284619b/">
        <SubText>LinkedIn</SubText>
        <Caret />
      </CaretTextWrapper>
      <CaretTextWrapper href="../../CV.pdf" download>
        <SubText>CV</SubText>
        <StyledDownload />
        <Caret />
      </CaretTextWrapper>
      <CaretTextWrapper href="mailto:addisonho@outlook.com">
        <SubText>addisonho@outlook.com</SubText>
        <Caret />
      </CaretTextWrapper>
    </>
  );
};

export default Contact;
