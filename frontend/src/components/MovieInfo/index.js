import React from "react";

import styles from "./styles.module.css";

function MovieInfo(props) {
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    runtime,
    genres,
  } = props.movie;

  const year = release_date?.substring(0, 4);
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <img
          src={`${imagePath}${poster_path}`}
          className={styles["poster-image"]}
          alt={title}
        />
        <div className={styles.infos}>
          <h1>{`${title} (${year})`}</h1>
          <h2>{`Duração: ${runtime} minutos`}</h2>
          <h3>{`Avaliação: ${vote_average}`}</h3>
          <div className={styles.chips}>
            {genres?.map((genre, index) => {
              return (
                <div key={index} className={styles.chip}>
                  {genre.name}
                </div>
              );
            })}
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
