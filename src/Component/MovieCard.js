import { Rate } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Link to={`/Movie/${movie.id}`} className="movieLink">
      <div className="movie">
        <img src={movie.posterUrl} alt={movie.title}></img>
        <div className="movie-info">
          <h2>{movie.title}</h2>

          <Rate value={movie.rate} style={{ fontSize: 25 }} disabled />
        </div>
      </div>
    </Link>
  );
};
