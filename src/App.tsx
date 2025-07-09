import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";

 const Skills = lazy(()=> import ("./components/Skills")) ;
 const Work = lazy(()=> import ("./components/Work"));
 const About = lazy(()=> import  ("./components/About"));
 import NavBar from "./components/navBar";
 const Contact = lazy(()=> import ("./components/Contact"));
 import Home from "./components/Home";
 const Articles = lazy(()=> import  ("./components/Articles"));
 const Footer = lazy(()=> import ("./components/Footer"));
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
    <div className="overflow-x-hidden">
      <NavBar />
    
      <div data-aos="fade-up" data-aos-delay="300"  className="relative z-0">
        <Home />
      </div>
      

      <Suspense fallback={<ClipLoader color="#1289eb" size={50} className="flex justify-center items-center h-screen" />}>
  
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
      </Suspense>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
