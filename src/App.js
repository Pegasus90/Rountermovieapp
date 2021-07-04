import "./App.css";
import Home from "./Component/Home";
import Movie from "./Component/Movie";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Movie/:id" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
