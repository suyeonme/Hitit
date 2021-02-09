import styled from 'styled-components';
import { MovieData } from 'types/types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.4rem;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const Img = styled.div`
  width: 4rem;
  height: 5rem;
  margin-right: 1rem;
`;

const MainTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

interface MovieItemProps {
  lastItemRef?: any;
  movie: MovieData;
  onClick: (movie: MovieData) => void;
}

function MovieItem({ lastItemRef, movie, onClick }: MovieItemProps) {
  const { Poster, Title, Year } = movie;

  return (
    <Wrapper ref={lastItemRef} onClick={() => onClick(movie)}>
      <Img>
        <img src={Poster} alt={Title + ' in ' + Year} />
      </Img>
      <div>
        <MainTitle>{Title}</MainTitle>
        <SubTitle>{Year}</SubTitle>
      </div>
    </Wrapper>
  );
}

export default MovieItem;
