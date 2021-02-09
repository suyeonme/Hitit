import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { Wrapper, Placeholder } from 'styles/style';
import { MovieData } from 'types/types';
import useFetch from 'hooks/useFetch';
import MovieItem from 'components/Search/MovieItem';

interface SearchProps {
  title: string;
  placeholder: string;
}

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.7rem 0.5rem;

  &:focus {
    outline: none;
  }
`;

function Search({ title, placeholder }: SearchProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { isLoading, error, list, hasMore } = useFetch(query, page);

  const isLastItem = (i: number): boolean => list.length === i + 1;

  const observer = useRef<any>(null);

  const lastItemRef = useCallback(
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
    <Wrapper width={30}>
      <h1>{title}</h1>
      <SearchInput
        type="input"
        value={query}
        placeholder={placeholder}
        onChange={handleChange}
      />

      <div>
        {list &&
          list.map((movie: MovieData, i: number) => (
            <MovieItem
              key={i}
              movie={movie}
              lastItemRef={isLastItem(i) ? lastItemRef : undefined}
            />
          ))}
      </div>
      {isLoading && <Placeholder>Loading...</Placeholder>}
      {error && <Placeholder>error!</Placeholder>}
    </Wrapper>
  );
}

export default Search;
