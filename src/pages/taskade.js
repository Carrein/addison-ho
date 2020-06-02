import React from "react";
import { Text, SubText, StyledImage } from "./index.styled";

const Taskade = () => {
  return (
    <>
      <StyledImage src="taskade.png" />
      <Text>Software Engineering Intern</Text>
      <Text>Singapore, Spring 2020</Text>
      <br />
      <SubText>
        After I was deported back to Singapore from the US, I started a new
        internship at Taskade, a remote work collaboration tool.
      </SubText>
      <br />
      <SubText>
        Taskade's architecture was mostly in Javascript, most of my work is
        centered on the front-end with React, Gatsby and GraphQL.
      </SubText>
      <br />
      <SubText>
        Here, I spend most of my working hours aligning {"<div/>"}, writing
        queries, designing components in Figma and writing product
        specifications I'm pretty sure no one reads.
      </SubText>
      <br />
      <SubText>
        Fun fact: Because of the lockdown, I have never actually met any of my
        coworkers in person before.
      </SubText>
    </>
  );
};

export default Taskade;
