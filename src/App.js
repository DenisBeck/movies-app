import { useState } from 'react';
import { Offline } from 'react-detect-offline';
import _ from 'lodash';
import { Alert, Pagination } from 'antd';

import MoviesList from './components/movies-list';
import SearchInput from './components/search-input';
import FetchProvider from './helpers/fetch-provider';

import './App.css';

const { ErrorBoundary } = Alert;

export default function App() {
  const [query, setQuery] = useState({ keyword: '', page: 1 });

  const debounced = _.debounce((value) => setQuery((state) => ({ ...state, keyword: value })), 500);

  const onChangeSearch = (searchValue) => {
    debounced(searchValue);
  };

  const onChangePage = (page) => {
    setQuery((state) => ({ ...state, page }));
  };

  return (
    <ErrorBoundary>
      <Offline>
        <Alert style={{ fontSize: '24px' }} type="warning" message="You're offline right now. Check your connection." />
      </Offline>
      <main className="movies">
        <SearchInput onChangeSearch={onChangeSearch} />
        <FetchProvider query={query}>
          {({ movies, totalCount }) => (
            <>
              <MoviesList data={movies} />
              <Pagination
                total={totalCount}
                align="center"
                pageSize={20}
                current={query.page}
                onChange={onChangePage}
                showSizeChanger={false}
              />
            </>
          )}
        </FetchProvider>
      </main>
    </ErrorBoundary>
  );
}
