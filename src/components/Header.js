import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
color: whitesmoke;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <Title className="ui center">Rick &amp; Morty Fan Page</Title>
    </header>
  );
}
