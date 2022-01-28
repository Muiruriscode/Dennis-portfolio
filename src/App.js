import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Resume from "./Resume";
import Hire from "./Hire";
import Job from "./Job";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/services">
            <Hire />
          </Route>
          <Route path="/job/:category">
            <Job />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
