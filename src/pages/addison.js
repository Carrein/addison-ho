import React from "react";
import Activity from "./activity";

import {
  StyledImg,
  Text,
  SubText,
  StyledCard,
  TextWrapper,
} from "./index.styled";

const Addison = () => {
  return (
    <>
      <Text>Hi, im Addison.</Text>
      <SubText>
        Here are some of the hijinks I was up to in the last 24 hours.
      </SubText>
      <br />
      <Activity />
      <br />
      <SubText>I'm currently working at Taskade and on FlockSupport.</SubText>
    </>
  );
};

export default Addison;
