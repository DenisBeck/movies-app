import MoviesItem from '../movies-item';

import './movies-list.css';

function MoviesList({ data }) {
  return (
    <ul className="movies-list">
      {data.map((movie) => (
        <MoviesItem key={movie.id} data={movie} />
      ))}
    </ul>
  );
}

export default MoviesList;
