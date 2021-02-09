import Movie from 'components/Movie/Movie';
import { MovieProvider } from 'context/movieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Movie />
      </div>
    </MovieProvider>
  );
}

export default App;
