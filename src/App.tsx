import React from "react";
import "./App.scss";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderBanner from "./components/Header/HeaderBanner";
import FeaturedProject from "./components/FeaturedProject";

function App() {
  return (
    <div className="container">
      <HeaderMenu />
      <HeaderBanner />
      <FeaturedProject />
    </div>
  );
}

export default App;
