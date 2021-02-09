import styled from 'styled-components';
import Search from 'components/Search/Search';
import Detail from 'components/Detail/Detail';

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

function Movie() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Search title="Search" placeholder="Search a movie" />
        <Detail />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Movie;
