import styled from 'styled-components';
import Search from 'components/Search/Search';
import Detail from 'components/Detail/Detail';

import { MovieTitle } from 'components/Detail/Detail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Title = styled(MovieTitle)`
  margin: 2rem 0;
`;

function Movie() {
  return (
    <Wrapper>
      <Title>Hitit Frontend Assignment</Title>
      <InnerWrapper>
        <Search title="Search" placeholder="Search a movie" />
        <Detail />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Movie;
