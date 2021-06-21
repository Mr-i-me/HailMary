import {
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.scss";

import Routes from './Routes'

function App() {
  return (
    <Router>
      <Routes />  
    </Router>
  );
}

export default App;

