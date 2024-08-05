import { useEffect, useState } from 'react';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import MovieApi from './services/movieAPI';
import MoviesList from './components/movies-list';
import Loader from './components/loader';
import Error from './components/error';

import './App.css';

const { ErrorBoundary } = Alert;

export default function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const movieApi = new MovieApi();
  let content = '';

  const renderContent = async () => {
    try {
      const data = await movieApi.getMoviesByKeyword('return');
      setMovies(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    renderContent();
  }, []);

  if (loading) {
    content = <Loader />;
  } else if (movies.length) {
    content = <MoviesList movies={movies} />;
  } else {
    content = <Error message={error.message} />;
  }

  return (
    <ErrorBoundary>
      <Offline>
        <Alert style={{ fontSize: '24px' }} type='warning' message="You're offline right now. Check your connection." />
      </Offline>
      <main className="movies">{content}</main>
    </ErrorBoundary>
  );
}
