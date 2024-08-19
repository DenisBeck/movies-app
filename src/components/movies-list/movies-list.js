import { useState } from 'react';
import { Pagination } from 'antd';

import withFetchData from '../../helpers/with-fetch-data';
import MoviesItem from '../movies-item';

import './movies-list.css';

function MoviesList(props) {
  const { type, onChangePage, onAddRating, data } = props;

  const [page, setPage] = useState('1');
  let movies;
  let totalCount;

  if (data) {
    ({ movies, totalCount } = data);
  }

  const onChangePageHandler = (pageValue) => {
    setPage(pageValue);
    onChangePage(pageValue, type);
  };

  return (
    <>
      <ul className="movies-list">
        {movies?.map((movie) => (
          <MoviesItem key={movie.id} onAddRating={onAddRating} data={movie} />
        ))}
      </ul>
      <Pagination
        total={totalCount}
        align="center"
        pageSize={20}
        current={page}
        onChange={onChangePageHandler}
        showSizeChanger={false}
        hideOnSinglePage
      />
    </>
  );
}

export default withFetchData(MoviesList);
