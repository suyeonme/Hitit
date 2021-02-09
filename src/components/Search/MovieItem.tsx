import styled from 'styled-components';
import { MovieData } from 'types/types';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Img = styled.div`
  width: 2rem;
  height: 3rem;
  margin-right: 1rem;
`;

const MainTitle = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;

const SubTitle = styled.h3`
  font-size: 0.7rem;
  color: grey;
`;

interface MovieItemProps {
  lastItemRef?: any;
  item: MovieData;
}

function MovieItem({ lastItemRef, item }: MovieItemProps) {
  const { Poster, Title, Year } = item;

  return (
    <div>
      <Wrapper ref={lastItemRef}>
        <Img>
          <img src={Poster} alt={Title + ' in ' + Year} />
        </Img>
        <div>
          <MainTitle>{Title}</MainTitle>
          <SubTitle>{Year}</SubTitle>
        </div>
      </Wrapper>
    </div>
  );
}

export default MovieItem;
