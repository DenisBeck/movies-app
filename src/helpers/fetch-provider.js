import { useEffect, useState } from 'react';
import { Alert } from 'antd';

import Error from '../components/error';
import Loader from '../components/loader';
import MovieApi from '../services/movieAPI';

function FetchProvider({ page, query, sessionId, children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const movieApi = new MovieApi();

  const renderResponse = async () => {
    if (query === '') {
      return;
    }
    setData([]);
    setLoading(true);
    setError(null);
    try {
      let result;
      if (query) {
        result = await movieApi.getMoviesByKeyword(query, page);
      } else {
        result = await movieApi.getRatedMovies(sessionId, page);
      }
      setData(result);
    } catch (e) {
      e.message = 'Failed to fetch. Maybe you need to connect a VPN';
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    renderResponse();
  }, [query]);

  if (query?.keyword === '') {
    return (
      <Alert type="info" message="Movies List is Empty" description="type keywords in search input to get movies" />
    );
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error.message} />;
  }
  if (!data?.movies?.length) {
    return <Alert type="info" message="No Movies" description="No movies found" />;
  }

  return children(data);
}

export default FetchProvider;
