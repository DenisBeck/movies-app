import { useEffect, useState } from 'react';
import { Alert } from 'antd';

import Error from '../components/error';
import Loader from '../components/loader';
import MovieApi from '../services/movieAPI';

function FetchProvider({ query, children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const movieApi = new MovieApi();

  const renderResponse = async () => {
    setData({});
    if (query.keyword) {
      setLoading(true);
      setError(null);
      try {
        const result = await movieApi.getMoviesByKeyword(query);
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    renderResponse();
  }, [query]);

  if (!query) {
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
    return <Alert type="info" message="No Movies" description="No movies found based on keywords" />;
  }

  return children(data);
}

export default FetchProvider;
