import styled from 'styled-components';

export const DefaultLayout = styled.div`
  min-height: 100%;
  min-width: 100%;
`;

export default DefaultLayout;

export const CenteredLayout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: center;
  height: 100%;
  justify-content: center;
  width: 100%;

  > * {
    margin-left: 0;
  }
`;
