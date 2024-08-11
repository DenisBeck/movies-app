/* eslint-disable class-methods-use-this */
import { format } from 'date-fns';

import stub from '../assets/stub.png';

export default class MovieApi {
  constructor(baseUrl = 'https://api.themoviedb.org/3') {
    this.baseUrl = baseUrl;
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQ4OTI5ZjllNmU5MmU3MTY3ZWQ4YTcyNzQ5ZTNjNyIsIm5iZiI6MTcyMjcyNjY0MC45NjkwNzUsInN1YiI6IjY2YWUyNzk3NGM3NDk4YTYzOTIxZWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pj6PSHP6EaDoFfkR34FD-8W9eEczqsXrbHHAvfII7Pk',
      },
    };
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
        genres: movie.genre_ids,
        rating: movie.rating || 0,
      };
    });
  }

  async getGenres() {
    const response = await fetch(`${this.baseUrl}/genre/movie/list?language=en`, this.options);
    const { genres } = await response.json();
    return genres;
  }

  async getMoviesByKeyword(keyword, page) {
    const response = await fetch(`${this.baseUrl}/search/movie?query=${keyword}&page=${page}`, this.options);
    const { results, total_results: totalCount } = await response.json();
    const movies = await this.getConvertedMovies(results);
    return { movies, totalCount };
  }

  async getGuestSessionId() {
    const response = await fetch(`${this.baseUrl}/authentication/guest_session/new`, this.options);
    const { success, guest_session_id: guestSessionId } = await response.json();
    const sessionId = success && guestSessionId;

    return sessionId;
  }

  async getRatedMovies(sessionId, page) {
    const response = await fetch(
      `${this.baseUrl}/guest_session/${sessionId}/rated/movies?page=${page}&sort_by=created_at.asc&api_key=6248929f9e6e92e7167ed8a72749e3c7`
    );
    const data = await response.json();
    if (data.status_code === 7) {
      return { movies: [] };
    }
    const movies = await this.getConvertedMovies(data.results);
    return { movies, totalCount: data.total_results };
  }

  async addRating(rate, movieId, sessionId) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQ4OTI5ZjllNmU5MmU3MTY3ZWQ4YTcyNzQ5ZTNjNyIsIm5iZiI6MTcyMjcyNjY0MC45NjkwNzUsInN1YiI6IjY2YWUyNzk3NGM3NDk4YTYzOTIxZWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pj6PSHP6EaDoFfkR34FD-8W9eEczqsXrbHHAvfII7Pk',
      },
      body: JSON.stringify({ value: rate }),
    };

    const response = await fetch(`${this.baseUrl}/movie/${movieId}/rating?guest_session_id=${sessionId}`, options);
    const result = await response.json();
    return result;
  }
}
