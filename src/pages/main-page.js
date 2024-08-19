import { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { Content } from 'antd/es/layout/layout';
import _ from 'lodash';

import MovieApi from '../services/movieAPI';
import { useData, useDataDispatch } from '../helpers/data-context-provider';
import SearchInput from '../components/search-input';
import MoviesList from '../components/movies-list';

const movieAPI = new MovieApi();

function MainPage({ className }) {
  const [tabKey, setTabKey] = useState('');
  const { query, sessionId, page, movieApiMethod, ratings } = useData();
  const dispatch = useDataDispatch();

  async function createGuestSession() {
    const id = await movieAPI.getGuestSessionId();
    dispatch({
      type: 'setSessionId',
      sessionId: id,
    });
  }

  async function fetchGenres() {
    const genres = await movieAPI.getGenres();
    dispatch({
      type: 'setGenres',
      genres,
    });
  }

  const setRatingToMovie = async (rate, movieId) => {
    const { success } = await movieAPI.addRating(rate, movieId, sessionId);
    if (success) {
      dispatch({
        type: 'setRating',
        ratings: {
          ...ratings,
          [movieId]: rate,
        },
      });
    }
  };

  const debounced = _.debounce((searchValue) => {
    dispatch({
      type: 'setSearchQuery',
      query: searchValue,
      movieApiMethod: {
        name: movieAPI.getMoviesByKeyword,
        args: [searchValue, page.search],
      },
    });
  }, 500);

  const onChangeSearch = (searchValue) => {
    debounced(searchValue);
  };

  const onChangePage = (pageValue, listType) => {
    dispatch({
      type: 'setPageNumber',
      page: {
        [listType]: pageValue,
      },
      movieApiMethod: {
        name: listType === 'search' ? movieAPI.getMoviesByKeyword : movieAPI.getRatedMovies,
        args: [listType === 'search' ? query : sessionId, pageValue],
      },
    });
  };

  const onChangeTabItem = (key) => {
    setTabKey(key);
    if (key !== tabKey) {
      const types = {
        1: 'search',
        2: 'rated',
      };
      const listType = types[key];
      onChangePage(page[listType], listType);
    }
  };

  useEffect(() => {
    createGuestSession();
    fetchGenres();
    onChangeTabItem('1');
  }, []);

  const tabItems = [
    {
      key: '1',
      label: 'Search',
      children: (
        <>
          <SearchInput onChangeSearch={onChangeSearch} />
          <MoviesList
            type="search"
            onChangePage={onChangePage}
            onAddRating={setRatingToMovie}
            movieApiMethod={movieApiMethod}
          />
        </>
      ),
    },
    {
      key: '2',
      label: 'Rated',
      children: (
        <MoviesList
          type="rated"
          onChangePage={onChangePage}
          onAddRating={setRatingToMovie}
          movieApiMethod={movieApiMethod}
          ratings
        />
      ),
    },
  ];

  return (
    <Content className={className}>
      <Tabs
        className="movies-tabs"
        centered
        activeKey={tabKey}
        items={tabItems}
        destroyInactiveTabPane
        onTabClick={onChangeTabItem}
      />
    </Content>
  );
}

export default MainPage;
