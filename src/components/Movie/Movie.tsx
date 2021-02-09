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
  // context API
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);

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
        {selectedMovie && <Detail id={selectedMovie?.imdbID} />}
      </InnerWrapper>
    </Wrapper>
  );
}

export default Movie;

// import React, { useState, useCallback } from 'react';
// import styled from 'styled-components';

// import { MovieData } from 'types/types';
// import Search from 'components/Search/Search';
// import Detail from 'components/Detail/Detail';

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: auto;
//   min-height: 100vh;
//   background-color: #f4f4f4;
// `;

// const InnerWrapper = styled.div`
//   display: flex;
//   width: 50rem;
// `;

// function Movie() {
//   const [selectedMovie, setSelectedMovie] = useState<MovieData>();

//   const handleClick = useCallback(movie => {
//     setSelectedMovie(movie);
//     // Save ID
//     // Send query using ID in order to get details
//   }, []);

//   return (
//     <Wrapper>
//       <InnerWrapper>
//         <Search
//           title="Search"
//           placeholder="Search a movie"
//           onClick={handleClick}
//         />
//         <Detail movie={selectedMovie} />
//       </InnerWrapper>
//     </Wrapper>
//   );
// }

// export default Movie;
