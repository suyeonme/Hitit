import styled from 'styled-components';

export const Wrapper = styled.div<{ width: number }>`
  width: ${props => props.width}rem;
  height: 35rem;
  overflow-y: scroll;
  padding: 1.5rem;
  margin: 0 1rem;
  border-radius: 7px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: white;

  @media (max-width: 768px) {
    width: 60%;
    margin: 1rem;
  }

  @media (max-width: 576px) {
    width: 90%;
    margin: 1rem;
  }
`;

export const Placeholder = styled.p`
  font-weight: 600;
  color: grey;
  font-size: 1.4rem;
`;
