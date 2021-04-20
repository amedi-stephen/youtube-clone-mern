import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Sass/App.scss";

import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
