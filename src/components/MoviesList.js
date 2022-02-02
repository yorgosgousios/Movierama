import React from "react";
import styles from "./MoviesList.module.css";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul className={styles.movielist}>
      {props.movies.map((movie) => (
        <Movie
          title={movie.title}
          releaseDate={movie.release_date}
          imgsource={movie.imgsource}
          overview={movie.overview}
          movieId={movie.movieId}
          key={movie.movieId}
          yearOfRelease={movie.yearOfRelease}
        />
      ))}
    </ul>
  );
};

export default MovieList;
