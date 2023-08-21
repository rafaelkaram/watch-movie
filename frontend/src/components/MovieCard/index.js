import React from "react";
import styles from "./styles.module.css";

const MovieCard = (props) => {
  const { id, title, overview, poster_path, release_date, vote_average } =
    props.movie;

  const reducedOverview = overview.substring(0, 200) + "...";
  const year = release_date.substring(0, 4);
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  return (
    <div
      className={styles.card}
      onClick={() => {
        props.setMovie(id);
      }}
    >
      <div className={styles["card-inner"]}>
        <div className={styles["card-front"]}>
          <img
            src={`${imagePath}${poster_path}`}
            className={styles["poster-image"]}
            alt={title}
          />
        </div>
        <div className={styles["card-back"]}>
          <img
            src={`${imagePath}${poster_path}`}
            className={styles["poster-image"]}
            alt={title}
          />
          <h1>{`${title} (${year})`}</h1>
          <div className={styles["card-description"]}>
            <h3>Descrição</h3>
            <span>{reducedOverview}</span>
          </div>
          <p>{`Avaliação: ${vote_average}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
