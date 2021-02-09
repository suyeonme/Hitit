export interface MovieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieDetailData {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  Genre: string;
  Runtime: string;
}

export type MovieList = MovieData[];
