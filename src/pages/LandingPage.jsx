import About from "../components/landing-page/About";
import Award from "../components/landing-page/Award";
import Chef from "../components/landing-page/Chef";
import Contact from "../components/landing-page/Contact";
import Footer from "../components/landing-page/Footer";
import Gallery from "../components/landing-page/Gallery";
import Hero from "../components/landing-page/Hero";
import Navbar from "../components/landing-page/Navbar";
import Specials from "../components/landing-page/Specials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specials />
      <Chef />
      <Award />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
