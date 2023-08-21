import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";
import MovieCard from "../../components/MovieCard";
import Header from "../../components/Header";
import MovieInfo from "../../components/MovieInfo";
import Modal from "../../components/Modal";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState({});
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${window.env.MOVIE_API_KEY}&language=pt-BRS&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [page]);

  const openModal = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${window.env.MOVIE_API_KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
    setToggleModal(true);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["movies-container"]}>
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} setMovie={openModal} />;
        })}
        <div className={styles.buttons}>
          <button
            disabled={page === 1}
            onClick={() => setPage((page) => page - 1)}
            className={styles.button}
          >
            <IoIosArrowBack />
          </button>
          <button
            disabled={movies.length < 20}
            onClick={() => setPage((page) => page + 1)}
            className={styles.button}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      {toggleModal && (
        <Modal close={() => setToggleModal(false)}>
          <MovieInfo movie={movie} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
