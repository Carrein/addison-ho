import React from "react";
import Activity from "./activity";

import { Text, SubText } from "../styles/index.styled";

const Addison = () => {
  return (
    <>
      <Text>Hi, I'm Addison.</Text>
      <SubText>Here are some of the hijinks I was recently up to...</SubText>
      <br />
      <Activity />
      <br />
      <SubText>I'm currently working at Taskade and on FlockSupport.</SubText>
    </>
  );
};

export default Addison;
