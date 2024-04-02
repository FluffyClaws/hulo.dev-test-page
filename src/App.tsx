import React from "react";
import "./App.scss";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderBanner from "./components/Header/HeaderBanner";
import FeaturedProject from "./components/FeaturedProject";
import AboutSection from "./components/AboutSection";
import HowWeWork from "./components/HowWeWork";

function App() {
  return (
    <div className="container">
      <HeaderMenu />
      <HeaderBanner />
      <FeaturedProject />
      <AboutSection />
      <HowWeWork />
    </div>
  );
}

export default App;
