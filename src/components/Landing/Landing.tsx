import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 4em;
`;

export default function Landing() {
  return (
    <Heading className="landing__heading">
      Hyper Type is a collection of random widget presented in the systems
      default monospace font.
    </Heading>
  );
}
