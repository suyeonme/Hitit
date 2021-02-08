import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

import useFetch from 'hooks/useFetch';

interface SearchProps {
  title: string;
  placeholder: string;
}

const Wrapper = styled.div`
  background-color: pink;
  width: 100%;
  height: 10rem;
  overflow-y: scroll;
`;

function Search({ title, placeholder }: SearchProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { isLoading, error, list, hasMore } = useFetch(query, page);

  const observer = useRef<any>(null);

  const lastBookElementRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setQuery(value);
      setPage(1);
    },
    []
  );

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <input
          type="input"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
      <Wrapper>
        {list &&
          list.map((item, i) => {
            if (list.length === i + 1) {
              return (
                <div key={i} ref={lastBookElementRef}>
                  {item.Title}
                </div>
              );
            } else {
              return <div key={i}>{item.Title}</div>;
            }
          })}
      </Wrapper>
      <div>{isLoading && 'Loading...'}</div>
      <div>{error && 'error'}</div>
    </div>
  );
}

export default Search;
