import React from "react";

import { Text, Caret, CaretTextWrapper, StyledDownload } from "./index.styled";

const Contact = () => {
  return (
    <>
      <CaretTextWrapper href="https://www.github.com/carrein">
        <Text>Github</Text>
        <Caret />
      </CaretTextWrapper>
      <CaretTextWrapper href="https://www.linkedin.com/in/addison-ho-ab284619b/">
        <Text>LinkedIn</Text>
        <Caret />
      </CaretTextWrapper>
      <CaretTextWrapper href="../../CV.pdf" download>
        <Text>CV</Text>
        <StyledDownload />
        <Caret />
      </CaretTextWrapper>
      <CaretTextWrapper href="mailto:addisonho@outlook.com">
        <Text>addisonho@outlook.com</Text>
        <Caret />
      </CaretTextWrapper>
    </>
  );
};

export default Contact;
