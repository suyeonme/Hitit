import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

// Debounce
// Infinite Scroll

interface MovieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const URL: string = `http://www.omdbapi.com/`;

function Movie() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<MovieData[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieData>();

  const delayedQuery = useCallback(
    debounce(q => sendQuery(q), 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    // e.preventDefault();
    setQuery(value);
    delayedQuery(value);
  };

  const sendQuery = useCallback(async (query: string): Promise<any> => {
    if (query === '') return;

    try {
      const res = await axios.get(`${URL}?s=${query}&apikey=${API_KEY}`);
      console.log(res.data);
      console.log(query);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Search</h1>
      <input
        type="input"
        value={query}
        onChange={handleChange}
        placeholder="Search a movie"
      />
    </div>
  );
}

export default Movie;
