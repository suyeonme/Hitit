import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MovieDetailData } from 'types/types';

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const URL: string = `http://www.omdbapi.com/`;

function useFetchDetail(imdbID: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<MovieDetailData>();

  const sendQuery = useCallback(async (id): Promise<any> => {
    try {
      await setIsLoading(true);
      let res = await axios.get(`${URL}?i=${id}&apikey=${API_KEY}`);
      await setData(res?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    sendQuery(imdbID);
  }, [sendQuery, imdbID]);

  return { isLoading, error, data };
}

export default useFetchDetail;
