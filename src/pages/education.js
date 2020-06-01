import React from "react";
import { Text, SubText, StyledCard, TextWrapper } from "./index.styled";

const Education = () => {
  return (
    <>
      <TextWrapper>
        <StyledCard />
        <Text>National University of Singapore</Text>
      </TextWrapper>
      <SubText>Bachelor of Computing, Computer Science </SubText>
      <TextWrapper>
        <StyledCard />
        <Text>Singapore Polytechnic</Text>
      </TextWrapper>
      <SubText>Diploma with Merit, Computer Engineering</SubText>
    </>
  );
};

export default Education;
