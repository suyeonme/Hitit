import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MovieList } from 'types/types';
import { debounce } from 'lodash';

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const URL: string = `http://www.omdbapi.com/`;

function useFetch(query: string, pageNum: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState<MovieList>([]);
  const [hasMore, setHasMore] = useState(false);

  const delayedQuery = useCallback(
    debounce((q: string) => sendQuery(q), 500),
    []
  );

  const sendQuery = useCallback(
    async (query: string): Promise<any> => {
      if (query === '') return;

      try {
        await setIsLoading(true);
        let res = await axios.get(
          `${URL}?s=${query}&page=${pageNum}&apikey=${API_KEY}`
        );
        const data: MovieList = await res?.data?.Search;
        if (data) {
          await setList(
            (prev: MovieList): MovieList => {
              return [...new Set([...prev, ...data])];
            }
          );
        }
        await setHasMore(data?.length > 0);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    },
    [pageNum]
  );

  useEffect(() => {
    setList([]);
  }, [query]);

  useEffect(() => {
    delayedQuery(query);
  }, [query, pageNum, delayedQuery]);

  return { isLoading, error, list, hasMore };
}

export default useFetch;
