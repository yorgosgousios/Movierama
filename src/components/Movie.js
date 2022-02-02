import React, { useState, useEffect } from "react";
import styles from "./Movie.module.css";
import { Modal } from "@mui/material";
import ReactPlayer from "react-player";

const Movie = (props) => {
  const [movieClicked, setMovieClicked] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [movieKey, setMovieKey] = useState("");
  const expandHandler = () => {
    setMovieClicked(!movieClicked);
    !movieClicked && setOpenDescription(false);
  };

  const descriptionExpandHandler = () => {
    setOpenDescription(!openDescription);
  };

  const fetchMovieVideo = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=bc50218d91157b1ba4f142ef7baaa6a0`
    );
    if (!response.ok) {
      throw new Error("Something went wrong with trailer");
    }
    const responseData = await response.json();
    responseData.results?.forEach((movieData) => {
      if (movieData.type === "Trailer") {
        setMovieKey(movieData.key);
      }
    });
  };

  useEffect(() => {
    fetchMovieVideo(props.movieId);
  }, [props.movieId]);

  return (
    <div className={styles.movieblock}>
      <div className={styles.moviebox}>
        <h2 className={styles.title}>{props.title}</h2>
        <h3 className={styles.year}>{`(${props.yearOfRelease})`}</h3>
        <img
          src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${props.imgsource}`}
          alt={props.title}
          className={styles.poster}
          onClick={expandHandler}
        />{" "}
      </div>
      <Modal
        open={movieClicked}
        onClose={expandHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div id="modal-modal-title" variant="h6" component="h2">
            <h2 className={styles.title}>{props.title}</h2>
          </div>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${movieKey}`} />
          {!openDescription && (
            <div
              className={styles.openDescription}
              onClick={descriptionExpandHandler}
            >
              Click to see description
            </div>
          )}
          {openDescription && (
            <div id="modal-modal-description" sx={{ mt: 2 }}>
              <p className={styles.overview}>{props.overview}</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Movie;
