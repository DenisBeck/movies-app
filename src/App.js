import { useEffect, useState } from 'react';
import { Offline } from 'react-detect-offline';
import _ from 'lodash';
import { Alert, Pagination, Tabs } from 'antd';
import { Content } from 'antd/es/layout/layout';

import MoviesList from './components/movies-list';
import SearchInput from './components/search-input';
import FetchProvider from './helpers/fetch-provider';
import GenresContextProvider from './helpers/genres-context-provider';
import MovieApi from './services/movieAPI';

import './App.css';

const { ErrorBoundary } = Alert;

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [sessionId, setSessionId] = useState(null);

  const movieAPI = new MovieApi();

  async function createGuestSession() {
    const id = await movieAPI.getGuestSessionId();
    setSessionId(id);
  }

  const setRatingToMovie = async (rate, movieId) => {
    await movieAPI.addRating(rate, movieId, sessionId);
  };

  useEffect(() => {
    createGuestSession();
  }, []);

  const debounced = _.debounce((value) => setQuery(value), 500);

  const onChangeSearch = (searchValue) => {
    debounced(searchValue);
  };

  const onChangePage = (pageValue) => {
    setPage(pageValue);
  };

  const tabItems = [
    {
      key: '1',
      label: 'Search',
      children: (
        <>
          <SearchInput initialQuery={query} onChangeSearch={onChangeSearch} />
          <FetchProvider page={page} query={query}>
            {({ movies, totalCount }) => (
              <>
                <MoviesList onAddRating={setRatingToMovie} data={movies} />
                <Pagination
                  total={totalCount}
                  align="center"
                  pageSize={20}
                  current={page}
                  onChange={onChangePage}
                  showSizeChanger={false}
                />
              </>
            )}
          </FetchProvider>
        </>
      ),
    },
    {
      key: '2',
      label: 'Rated',
      children: (
        <FetchProvider page={page} sessionId={sessionId}>
          {({ movies, totalCount }) => (
            <>
              <MoviesList onAddRating={setRatingToMovie} data={movies} />
              {totalCount && (
                <Pagination
                  total={totalCount}
                  align="center"
                  pageSize={20}
                  current={page}
                  onChange={onChangePage}
                  showSizeChanger={false}
                />
              )}
            </>
          )}
        </FetchProvider>
      ),
    },
  ];

  return (
    <ErrorBoundary>
      <Offline>
        <Alert style={{ fontSize: '24px' }} type="warning" message="You're offline right now. Check your connection." />
      </Offline>
      <GenresContextProvider>
        <Content className="movies">
          <Tabs className="movies-tabs" centered items={tabItems} defaultActiveKey="1" destroyInactiveTabPane />
        </Content>
      </GenresContextProvider>
    </ErrorBoundary>
  );
}
