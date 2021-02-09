import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MovieList } from 'types/types';

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const URL: string = `http://www.omdbapi.com/`;

function useFetch(query: string, pageNum: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState<MovieList>([]);
  const [hasMore, setHasMore] = useState(false);

  const sendQuery = useCallback(
    async (query: string): Promise<any> => {
      const CancelToken = axios.CancelToken;
      let cancel: () => void;

      if (query === '') return;

      try {
        await setIsLoading(true);
        let res = await axios.get(
          `${URL}?s=${query}&page=${pageNum}&apikey=${API_KEY}`,
          {
            cancelToken: new CancelToken(c => (cancel = c)),
          }
        );
        const data: MovieList = await res?.data?.Search;
        console.log(data);

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
        if (axios.isCancel(error)) return;
        setError(error);
      }
      return () => cancel();
    },
    [pageNum]
  );

  useEffect(() => {
    setList([]);
  }, [query]);

  useEffect(() => {
    sendQuery(query);
  }, [query, pageNum, sendQuery]);

  return { isLoading, error, list, hasMore };
}

export default useFetch;
