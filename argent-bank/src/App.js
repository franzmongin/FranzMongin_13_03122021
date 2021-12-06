import { Router, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <NavBar />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
