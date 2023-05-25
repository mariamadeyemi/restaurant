import spoon from "../../assets/spoon.png";
import heroImg from "../../assets/Hero-img.png";
import scroll from "../../assets/Scroll.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hashtag">#Bar #Gericht</p>
        <div className="hero-desc">
          <p>chase the new flavour</p>
          <img src={spoon} alt="spoon image" />
          <h2>the key to fine dining</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            culpa nulla. Vitae quae praesentium, unde molestias dolorum odio
            repudiandae facilis.
          </p>
          <button>Explore Menu</button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero image" width="100%" />
        </div>
      </div>
      <p className="timer">
        01 <span></span> 02 03 04
      </p>

      <p className="scroll">
        <img src={scroll} alt="scroll img" />
      </p>
    </section>
  );
}

export default Hero;
