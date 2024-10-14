import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WishList from "./WishList";
import Places from "./Places";
import Restaurants from "./Restaurants";
import "./App.css";


function App() {
  return (
    <Router>
      <nav className="link">
        <Link to="/">Wish List</Link>
        <Link to="/places">Places</Link>
        <Link to="restaurants">Restaurants</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WishList/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
      </Routes>
    </Router>
  )
}

export default App;





