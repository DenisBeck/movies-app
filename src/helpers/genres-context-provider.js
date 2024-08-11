import { createContext, useEffect, useState } from 'react';

import MovieApi from '../services/movieAPI';

export const GenresContext = createContext(null);

function GenresContextProvider({ children }) {
  const [genres, setGenres] = useState([]);

  const movieApi = new MovieApi();

  const fetchGenres = async () => {
    const data = await movieApi.getGenres();
    setGenres(data);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>;
}

export default GenresContextProvider;
