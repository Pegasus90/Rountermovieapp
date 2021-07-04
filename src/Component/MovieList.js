import { MovieCard } from "./MovieCard";
import { AddMovie } from "./AddMovie";

export const MovieList = ({ movielist, setmovie }) => {
  // adding new movie
  const handleAdd = (addMovie) => {
    setmovie([...movielist, addMovie]);
  };
  return (
    <div>
      <div className="movie-container">
        {/* list all movies in a moviecard component */}
        {movielist.map((e) => (
          <MovieCard key={e.id} movie={e} />
        ))}
      </div>
      <AddMovie onAdd={handleAdd} />
    </div>
  );
};
