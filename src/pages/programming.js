import React from "react";

import { Text, SubText } from "../styles/index.styled";

const Programming = () => {
  return (
    <>
      <Text>70% of my work goes here.</Text>
      <SubText>Javascript</SubText>
      <SubText>React</SubText>
      <SubText>Dart</SubText>
      <SubText>Flutter</SubText>
      <SubText>p5.js</SubText>
      <SubText>Figma</SubText>
      <SubText>Storybook</SubText>
      <SubText>Google Cloud Platform</SubText>
      <br />
      <Text>20% of my work goes here.</Text>
      <SubText>Node.JS</SubText>
      <SubText>Java</SubText>
      <SubText>Golang</SubText>
      <SubText>GraphQL</SubText>
      <SubText>REST/GRPC</SubText>
      <br />
      <Text>The remainder 10%.</Text>
      <SubText>Bugging people on Slack.</SubText>
      <SubText>Bugging people on StackOverflow.</SubText>
      <SubText>Bugging people on Discord.</SubText>
      <SubText>
        Fixing the problem myself anyways and deleting my question sheepishly.
      </SubText>
    </>
  );
};

export default Programming;
