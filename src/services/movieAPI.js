/* eslint-disable class-methods-use-this */
import { format } from 'date-fns';

import stub from '../assets/stub.png';

export default class MovieApi {
  constructor(baseUrl = 'https://api.themoviedb.org/3') {
    this.baseUrl = baseUrl;
    this.genres = [];
  }

  getConvertedMovies(movies) {
    return movies.map((movie) => {
      const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : stub;
      return {
        id: movie.id,
        title: movie.title,
        date: movie.release_date && format(new Date(movie.release_date), 'MMMM d, yyyy'),
        overview: movie.overview,
        image,
        genres:
          movie.genre_ids.map((genre) => {
            const matchGenre = this.genres.find((item) => genre === item.id);
            return matchGenre.name;
          }) || [],
      };
    });
  }

  async setGenres(options) {
    if (!this.genres.length) {
      const response = await fetch(`${this.baseUrl}/genre/movie/list?language=en`, options);
      const { genres } = await response.json();
      if (!genres) {
        throw new Error('Данные не получены');
      }
      this.genres = genres;
    }
  }

  async getMoviesByKeyword(keyword) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQ4OTI5ZjllNmU5MmU3MTY3ZWQ4YTcyNzQ5ZTNjNyIsIm5iZiI6MTcyMjcyNjY0MC45NjkwNzUsInN1YiI6IjY2YWUyNzk3NGM3NDk4YTYzOTIxZWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pj6PSHP6EaDoFfkR34FD-8W9eEczqsXrbHHAvfII7Pk',
      },
    };

    this.setGenres(options);
    if (this.setGenres.length) {
      const response = await fetch(`${this.baseUrl}/search/movie?query=${keyword}`, options);
      const { results } = await response.json();
      if (!results) {
        throw new Error('Данные не получены');
      }
      return this.getConvertedMovies(results);
    }
    return null;
  }
}
