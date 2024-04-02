import AboutSection from "../components/AboutSection";
import CardsSection from "../components/CardsSection";
import FeaturedProject from "../components/FeaturedProject";
import GetInTouchSection from "../components/GetInTouchSection";
import HeaderBanner from "../components/Header/HeaderBanner";
import HeaderMenu from "../components/Header/HeaderMenu";
import Highlights from "../components/Highlights";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/MiscElements/Testimonials";
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
      <Highlights />
      <Testimonials />
      <GetInTouchSection />
    </>
  );
};

export default Home;
