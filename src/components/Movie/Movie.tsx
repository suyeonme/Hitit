import React, { useState } from 'react';
import { MovieData } from 'types/types';
import Search from 'components/Search/Search';

// Debounce
// Image Lazy loading
// Typescript

function Movie() {
  const [selectedMovie, setSelectedMovie] = useState<MovieData>();
  // Click an item -> setSelectedMovie(item);

  return (
    <div>
      <Search title="Search" placeholder="Search a movie" />
    </div>
  );
}

export default Movie;

// import React, { useState, useCallback, useRef } from 'react';
// // import axios from 'axios';
// // import { debounce } from 'lodash';
// import styled from 'styled-components';

// import useFetch from 'hooks/useFetch';
// import { MovieData } from 'types/types';
// import Search from 'components/Search/Search';

// // Debounce
// // Image Lazy loading
// // Typescript

// const Wrapper = styled.div`
//   background-color: pink;
//   width: 100%;
//   height: 10rem;
//   overflow-y: scroll;
// `;

// function Movie() {
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [selectedMovie, setSelectedMovie] = useState<MovieData>();
//   const { isLoading, error, list, hasMore } = useFetch(query, page);

//   const observer = useRef<any>(null);

//   const lastBookElementRef = useCallback(
//     node => {
//       if (isLoading) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver(entries => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPage(prev => prev + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [isLoading, hasMore]
//   );

//   const handleChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>): void => {
//       const { value } = e.target;
//       setQuery(value);
//       setPage(1);
//     },
//     []
//   );

//   return (
//     <div>
//       <div>
//         <h1>Search</h1>
//         <input
//           type="input"
//           value={query}
//           onChange={handleChange}
//           placeholder="Search a movie"
//         />
//       </div>
//       <Wrapper>
//         {list &&
//           list.map((item, i) => {
//             if (list.length === i + 1) {
//               return (
//                 <div key={i} ref={lastBookElementRef}>
//                   {item.Title}
//                 </div>
//               );
//             } else {
//               return <div key={i}>{item.Title}</div>;
//             }
//           })}
//       </Wrapper>
//       <div>{isLoading && 'Loading...'}</div>
//       <div>{error && 'error'}</div>
//     </div>
//   );
// }

// export default Movie;
