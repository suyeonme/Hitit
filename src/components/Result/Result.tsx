import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { MovieData, MovieList } from 'types/types';

const Wrapper = styled.div`
  background-color: pink;
  width: 100%;
  height: 10rem;
  overflow-y: scroll;
`;

interface ResultProps {
  list: MovieList;
  onInit: (div: HTMLDivElement) => void;
  onScroll: () => void;
}

function Result({ list, onInit, onScroll }: ResultProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) onInit(ref.current);
  }, [onInit]);

  useEffect(() => {
    const resultRef = ref.current;

    if (resultRef) {
      window.addEventListener('scroll', () => onScroll(), true);
      return () => window.removeEventListener('scroll', () => onScroll(), true);
    }
  }, [onScroll]);

  return (
    <Wrapper ref={ref}>
      {list.map((item: MovieData, i: number) => (
        <p key={i}>{item.Title}</p>
      ))}
    </Wrapper>
  );
}

export default React.memo(Result);
