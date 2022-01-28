import About from "./About";
import Service from "./Service";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./project";
import Navbar from "./Navbar";
import { FaChevronCircleUp } from "react-icons/fa";

import homeImg from "./img/main.png";

const Home = () => {
  return (
    <main id="home" className="mainSection">
      <Navbar />
      <div className="homeSection padding">
        <div className="homeDivContent">
          <h1 className="welcome homeText">Welcome</h1>
          <h1 className="homeText name">Hi, I’m Dennis Muiruri</h1>
          <h2 className="homeText">Web Developer.</h2>
          <h3 className="homeText">based in Kenya.</h3>
          <a href="#home" className="rctIcons chevUp">
            <FaChevronCircleUp />
          </a>
        </div>
        <div className="homeDiv">
          <img src={homeImg} alt="home image" className="homeImg"></img>
        </div>
      </div>
      <About />
      <Service />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
