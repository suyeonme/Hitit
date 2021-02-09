import styled from 'styled-components';

export const Wrapper = styled.div<{ width: number }>`
  width: ${props => props.width}rem;
  // flex: 1;
  // height: 15rem;
  height: 25rem;
  overflow-y: scroll;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 7px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const Placeholder = styled.p`
  font-weight: 600;
  color: grey;
  font-size: 0.8rem;
`;
