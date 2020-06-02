import React from "react";
import { Text, SubText, CaretTextWrapper, TextWrapper } from "./index.styled";

const FlockSupport = () => {
  return (
    <>
      <Text>Employee</Text>
      <Text>Singapore, Summer 2020</Text>
      <br />
      <SubText>
        FlockSupport is a new take on Software as a Service for customer support
        needs. It aims to ease the difficulties customers face when seeking
        after-sales service from businesses.
      </SubText>
      <br />
      <SubText>
        FlockSupport is currently in development and is slated for test drive
        year end 2020.
      </SubText>
      <br />
      <TextWrapper>
        <SubText>Check it out at </SubText>
        <CaretTextWrapper href="https://www.flocksupport.com">
          <SubText>flocksupport.com</SubText>
        </CaretTextWrapper>
      </TextWrapper>
    </>
  );
};

export default FlockSupport;
