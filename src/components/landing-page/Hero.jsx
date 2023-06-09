import spoon from "../../assets/spoon.png";
import heroImg from "../../assets/Hero-img.png";
import scroll from "../../assets/Scroll.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hashtag"> #Gericht #Bar </p>
        <div className="hero-desc">
          <p className="chase">chase the new flavour</p>
          <img src={spoon} alt="spoon image" />
          <h2>the key to fine dining</h2>
          <p className="detail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            culpa nulla. Vitae quae praesentium, unde molestias dolorum odio
            repudiandae facilis.
          </p>
          <button>Explore Menu</button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
      <p className="timer">
        01 <span>02 03 04</span>
      </p>

      <div className="scroll">
        <img src={scroll} alt="scroll img" />
      </div>
    </section>
  );
}

export default Hero;
