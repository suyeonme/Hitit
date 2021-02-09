import React, { useContext } from 'react';
import styled from 'styled-components';
import { MovieData } from 'types/types';
import { MovieContext } from 'context/movieContext';

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

type lastItemRefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;

interface MovieItemProps {
  lastItemRef?: lastItemRefType;
  movie: MovieData;
}

function MovieItem({ lastItemRef, movie }: MovieItemProps) {
  const { Poster, Title, Year } = movie;
  const { setSelectedMovie } = useContext(MovieContext);

  const handleClick = (movie: MovieData): void => setSelectedMovie(movie);

  return (
    <Wrapper ref={lastItemRef} onClick={() => handleClick(movie)}>
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
