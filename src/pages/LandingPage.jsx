import About from "../components/landing-page/About";
import Chef from "../components/landing-page/Chef";
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
    </>
  );
}

export default Home;
