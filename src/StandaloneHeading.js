import React from 'react';
import styled from 'styled-components';
import { fonts } from './constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: ${fonts.serif};
  margin: 0;
  text-align: center;
  font-weight: 400;
`;

export default props => (
  <Container>
    <Heading>{props.children}</Heading>
  </Container>
);
