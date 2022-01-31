import { useState, useEffect } from "react";
import styles from ".//components/MainPage.module.css";
import MoviesList from "./components/MoviesList";
import { Container } from "react-bootstrap";
import MainNav from "./components/MainNav";

function App(props) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  // const [isClicked, setIsClicked] = useState(false);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();
    console.log(responseData);

    const transformedMovies = responseData.results.map((movieData) => {
      return {
        title: movieData.original_title,
        release_date: movieData.release_date,
        overview: movieData.overview,
        imgsource: movieData.poster_path,
        movieId: movieData.id,
        key: movieData.id,
      };
    });
    console.log(transformedMovies);
    setMovies(transformedMovies);
  };

  const searchMovieFetch = async (search) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bc50218d91157b1ba4f142ef7baaa6a0&query=${search}`
    );
    const responseData = await response.json();

    const transformedMovies = responseData.results?.map((movieData) => {
      return {
        title: movieData.original_title,
        release_date: movieData.release_date,
        overview: movieData.overview,
        imgsource: movieData.poster_path,
        movieId: movieData.id,
        key: movieData.id,
      };
    });

    setMovies(transformedMovies);
    console.log(responseData);
  };

  const saveInputDataHandler = (input) => {
    const inputData = input;
    // console.log(inputData);
    setSearch(inputData);
  };

  // const saveClickHandler = (isClicked) => {
  //   const clickedData = isClicked;
  //   setIsClicked(clickedData);
  //   console.log(isClicked);
  // };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    // getData(GET_MOVIES_LIST);
    if (search.trim() !== "") searchMovieFetch(search);
  }, [search]);

  return (
    <Container className={styles.body}>
      <MainNav
        onSaveInputData={saveInputDataHandler}
        // onSaveClick={saveClickHandler}
      />
      <MoviesList movies={movies} searchMovie={searchMovieFetch} />
    </Container>
  );
}

export default App;
