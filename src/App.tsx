import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import NavBar from "./components/navBar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation should happen only once
      offset: 120, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <>
      <NavBar />
      <div data-aos="fade-up" data-aos-delay="300"  className="relative z-0">
        <Home />
      </div>

      <div data-aos="fade-up" data-aos-delay="300"  className="relative z-0">
        <About />
      </div>

      <div data-aos="fade-up" data-aos-delay="300"  className="relative z-0">
        <Skills />
      </div>

      <div data-aos="fade-left" data-aos-delay="300"  className="relative z-0">
        <Work />
      </div>

      <div data-aos="fade-up" data-aos-delay="500"  className="relative z-0">
        <Articles />
      </div>
      <div data-aos="fade-up" data-aos-delay="500"  className="relative z-0">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
