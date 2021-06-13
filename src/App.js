import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Age from "./pages/Age/Age";


function App() {
  return (
    <Router>
      {/*<div className="App">*/}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Age />
            {/*<Home />*/}
          </Route>
          {/*<Route path="/about">*/}
          {/*  <About />*/}
          {/*</Route>*/}
          {/*<Route path="/dashboard">*/}
          {/*  <Dashboard />*/}
          {/*</Route>*/}
        </Switch>
      </div>
      {/*</div>*/}
    </Router>
  );
}

export default App;

