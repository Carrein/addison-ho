import React from "react";
import { Text, SubText, TextWrapper } from "./index.styled";

const Education = () => {
  return (
    <>
      <TextWrapper>
        <Text>National University of Singapore</Text>
      </TextWrapper>
      <SubText>Bachelor of Computing, Computer Science </SubText>
      <br />
      <TextWrapper>
        <Text>Singapore Polytechnic</Text>
      </TextWrapper>
      <SubText>Diploma with Merit, Computer Engineering</SubText>
    </>
  );
};

export default Education;
