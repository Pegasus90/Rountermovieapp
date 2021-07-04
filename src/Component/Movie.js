import React, { useState, useEffect } from "react";
import { Movies } from "../movies";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({ match, history }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(Movies.find((movie) => movie.id === +match.params.id));
  }, [match.params.id]);

  return (
    <div className="movieDetails">
      <h2>{movie.title}</h2>
      <h3>{movie.description}</h3>
      <img src={movie.posterUrl} alt={movie.title} className="movieImg" />
      <h2>Trailer Link</h2>
      <Link to={{ pathname: movie.trailer }} target="_blank">
        <h2>{movie.trailer}</h2>
      </Link>
      <Button variant="secondary" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default Movie;
