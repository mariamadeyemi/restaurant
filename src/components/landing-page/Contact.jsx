import spoon from "../../assets/spoon.png";
import drink from "../../assets/img.png";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-desc">
        <p>Contact</p>
        <img src={spoon} alt="spoon" />
        <h2>Find Us</h2>
        <p className="detail">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="opening">opening hours</p>
        <p className="day">Mon - Fri: 10:00am - 02:00am</p>
        <p className="day">Sat - Sun: 10:00am - 03:00am</p>
        <button>view us</button>
      </div>
      <div className="contact-img">
        <img src={drink} alt="" />
      </div>
    </div>
  );
}

export default Contact;
