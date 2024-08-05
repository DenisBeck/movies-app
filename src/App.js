import { useEffect, useState } from 'react';

import MovieApi from './services/movieAPI';
import MoviesList from './components/movies-list';

import './App.css';

export default function App() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const movieApi = new MovieApi();
  let content = '';

  const renderContent = async () => {
    try {
      const data = await movieApi.getMoviesByKeyword('return');
      setMovies(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    renderContent();
  }, []);

  if (loading) {
    content = <p>LOADING...</p>;
  } else if (movies.length) {
    content = <MoviesList movies={movies} />;
  } else {
    content = <p>{error}</p>;
  }

  return <main className="movies">{content}</main>;
}
