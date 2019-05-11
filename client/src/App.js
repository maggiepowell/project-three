import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home} />
        </div>
    </Router>
  );
}

export default App;
