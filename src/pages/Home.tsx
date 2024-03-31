import AboutSection from "../components/AboutSection";
import CardsSection from "../components/CardsSection";
import FeaturedProject from "../components/FeaturedProject";
import HeaderBanner from "../components/Header/HeaderBanner";
import HeaderMenu from "../components/Header/HeaderMenu";
import HowWeWork from "../components/HowWeWork";
import ProcessesSection from "../components/ProcessesSection";

const Home: React.FC = () => {
  return (
    <>
      <HeaderMenu />
      <HeaderBanner />
      <FeaturedProject />
      <AboutSection />
      <HowWeWork />
      <CardsSection />
      <ProcessesSection />
    </>
  );
};

export default Home;
