import React from "react";
import "./App.scss";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderBanner from "./components/Header/HeaderBanner";
import FeaturedProject from "./components/FeaturedProject";
import AboutSection from "./components/AboutSection";
import HowWeWork from "./components/HowWeWork";
import CardsSection from "./components/CardsSection";
import ProcessesSection from "./components/ProcessesSection";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Home />
      {/* <HeaderMenu />
      <HeaderBanner />
      <FeaturedProject />
      <AboutSection />
      <HowWeWork />
      <CardsSection />
      <ProcessesSection /> */}
    </div>
  );
}

export default App;
