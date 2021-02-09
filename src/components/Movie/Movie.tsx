import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { MovieData } from 'types/types';
import Search from 'components/Search/Search';
import Detail from 'components/Detail/Detail';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100vh;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 50rem;
`;

function Movie() {
  const [selectedMovie, setSelectedMovie] = useState<MovieData>();

  const handleClick = useCallback(movie => {
    setSelectedMovie(movie);
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <Search
          title="Search"
          placeholder="Search a movie"
          onClick={handleClick}
        />
        <Detail item={selectedMovie} />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Movie;
