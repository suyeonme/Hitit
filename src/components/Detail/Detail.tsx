import React, { useContext } from 'react';
import styled from 'styled-components';

import { Wrapper, Placeholder } from 'styles/style';
import useFetchDetail from 'hooks/useFetchDetail';
import { MovieContext } from 'context/movieContext';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 0 1.5rem;
`;

const MovieTitle = styled.h1`
  font-size: 2.5rem;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  span {
    display: block;
    font-size: 1.2rem;
    margin-top: 0.7rem;
    font-weight: 400;
  }
`;

const MovieDes = styled.p<{ top?: number; bottom?: number; fontSize?: number }>`
  line-height: 1.3;
  color: #939393;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.2')}rem;
  margin-top: ${({ top }) => (top ? top : 0)}rem;
  margin-bottom: ${({ bottom }) => (bottom ? bottom : 0)}rem;

  @media (max-width: 576px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1')}rem;
  }

  span {
    font-weight: 600;
    color: #7c7c7c;
  }
`;

const Img = styled.div`
  flex: 1.5;
  height: 22rem;
`;

const Rating = styled.div`
  background-color: #52a846;
  border-radius: 50%;
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

function Detail() {
  const { selectedMovie } = useContext(MovieContext);
  const { isLoading, error, data } = useFetchDetail(selectedMovie?.imdbID);

  if (selectedMovie && data) {
    const {
      Title,
      Year,
      Poster,
      imdbRating,
      Plot,
      Director,
      Writer,
      Actors,
      Genre,
      Runtime,
    } = data;

    return (
      <Wrapper width={50}>
        {isLoading && <Placeholder>Loading...</Placeholder>}
        {error && <Placeholder>error!</Placeholder>}
        <Content>
          <Img>
            <img src={Poster} alt={Title} />
          </Img>
          <TextWrapper>
            <Header>
              <MovieTitle>
                {Title}
                <span>{Year}</span>
              </MovieTitle>
              <Rating>{imdbRating}</Rating>
            </Header>
            <MovieDes top={2} fontSize={1.35} bottom={1}>
              {Plot}
            </MovieDes>
            <MovieDes bottom={1}>
              <span>Director: </span>
              {Director}
            </MovieDes>
            <MovieDes bottom={1}>
              <span>Writer: </span>
              {Writer}
            </MovieDes>
            <MovieDes bottom={1}>
              <span>Actors: </span>
              {Actors}
            </MovieDes>
          </TextWrapper>
        </Content>
        <div>
          <MovieDes>{Genre}</MovieDes>
          <MovieDes>{Runtime}</MovieDes>
        </div>
      </Wrapper>
    );
  }
  return null;
}

export default Detail;
