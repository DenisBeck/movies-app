import MoviesItem from '../movies-item';
import './movies-list.css';

function MoviesList({ movies }) {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <MoviesItem key={movie.id} data={movie} />
      ))}
    </ul>
  );
}

export default MoviesList;
