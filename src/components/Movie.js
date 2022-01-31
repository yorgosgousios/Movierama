import React, { useState } from "react";
import styles from "./Movie.module.css";

const Movie = (props) => {
  const [movieClicked, setMovieClicked] = useState(false);
  const expandHandler = () => {
    setMovieClicked(!movieClicked);
  };
  return (
    <div
      onClick={expandHandler}
      className={movieClicked ? styles.movieblockclicked : styles.movieblock}
    >
      <div className={movieClicked ? styles.movieboxClicked : styles.moviebox}>
        <h2 className={styles.title}>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        {!movieClicked && (
          <img
            src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${props.imgsource}`}
            alt={props.title}
            className={styles.poster}
          />
        )}
        {movieClicked && <p className={styles.overview}>{props.overview}</p>}
      </div>
    </div>
  );
};

export default Movie;
