import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from './constants';
import BekkLogo from './BekkLogo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 20px 80px;
`;
const TopContent = styled.header`
  align-items: center;
  display: flex;
  font-family: ${fonts.sansSerif};
  font-weight: 300;
  font-size: 32px;
  justify-content: space-between;
`;
const Logo = styled(BekkLogo)`
  width: 100px;
`;
const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;
const Title = styled.h1`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 80px;
  margin: 1em 0 0 0;
`;
const Meta = styled.p`
  color: ${props => props.textColor || colors.greyLight};
  font-family: ${fonts.sansSerif};
  font-weight: 300;
  font-size: 32px;
`;

const CoverSlide = props => (
  <Container style={{ color: props.textColor }}>
    <TopContent>
      <Logo />
      <div style={{ flex: 1 }}>{props.where}</div>
      <div>{props.when}</div>
    </TopContent>
    <MainContent>
      <Title>{props.what}</Title>
      <Meta textColor={props.textColor}>{props.who}</Meta>
    </MainContent>
  </Container>
);

CoverSlide.propTypes = {
  where: string.isRequired,
  when: string.isRequired,
  what: string.isRequired,
  who: string.isRequired,
  textColor: string,
};

export default CoverSlide;
