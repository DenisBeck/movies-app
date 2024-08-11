import MoviesItem from '../movies-item';

import './movies-list.css';

function MoviesList({ onAddRating, data }) {
  return (
    <ul className="movies-list">
      {data.map((movie) => (
        <MoviesItem key={movie.id} onAddRating={onAddRating} data={movie} />
      ))}
    </ul>
  );
}

export default MoviesList;
