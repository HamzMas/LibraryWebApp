import React from "react";
import "./App.css";
import { ExploreTopBooks } from "./Layouts/HomePage/ExploreTopBooks";
import { Navbar } from "./Layouts/NavbarAndFooter/Navbar";
import { Carousel } from "./Layouts/HomePage/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
