import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

const Routing = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
          <Link to="/profile" className="btn btn-success">
            Profile
          </Link>
          <Link to="/about" className="btn btn-danger">
            About
          </Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
