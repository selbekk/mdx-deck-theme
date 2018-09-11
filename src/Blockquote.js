import React from 'react';
import styled from 'styled-components';

const Blockquote = styled.blockquote`
  font-family: 'DIN OT', Georgia, serif;
  font-size: 30px;
  font-weight: 400;
  margin-left: 120px;
  max-width: 50%;
  text-align: left;

  p {
    margin-left: 0;
    max-width: 100%;
    font-size: 30px;

    &:last-of-type {
      margin: 0;
    }
  }

  cite {
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
    font-style: normal;
  }
`;

export default props => (
  <Blockquote>
    {props.children}
    {props.cite && <cite>{props.cite}</cite>}
  </Blockquote>
);
