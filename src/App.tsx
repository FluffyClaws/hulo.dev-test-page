import React from "react";
import "./App.scss";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderBanner from "./components/Header/HeaderBanner";
import FeaturedProject from "./components/FeaturedProject";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="container">
      <HeaderMenu />
      <HeaderBanner />
      <FeaturedProject />
      <AboutSection />
    </div>
  );
}

export default App;
