import "../App.css";
import { Movies } from "../movies";
import { MovieList } from "./MovieList";
import { Filter } from "./Filter";
import { useState } from "react";

function App() {
  // hooks list
  const [movie, setmovie] = useState(Movies);
  const [searchText, setsearchText] = useState("");
  const [rating, setRating] = useState(1);
  const filterText = (s) => {
    setsearchText(s);
  };
  return (
    <div className="App">
      <h1>Movie App</h1>
      {/* filter component */}
      <Filter ratevalue={rating} setratevalue={setRating} search={filterText} />
      {/* movielist component */}
      <MovieList
        movielist={movie.filter(
          (e) =>
            e.rate >= rating &&
            e.title.toLocaleUpperCase().includes(searchText.toLocaleUpperCase())
        )}
        setmovie={setmovie}
      />
    </div>
  );
}

export default App;
