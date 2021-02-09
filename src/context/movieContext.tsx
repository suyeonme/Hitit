import React, { createContext, useMemo, useState } from 'react';
import { MovieData } from 'types/types';

interface MovieProviderProps {
  children: React.ReactNode;
}

export const MovieContext = createContext<any>(undefined);

export function MovieProvider({ children }: MovieProviderProps) {
  const [selectedMovie, setSelectedMovie] = useState<MovieData>();

  const contextValue = useMemo(() => {
    return { selectedMovie, setSelectedMovie };
  }, [selectedMovie]);

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
