import spoon from "../../assets/spoon.png";
import drink from "../../assets/img.png";


function Contact() {
    return ( 
        <div className="contact-container">
            <div className="contact-desc">
                <p>Contact</p>
                <img src={spoon} alt="spoon" />
                <p>Find Us</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>opening hours</p>
                <p>Mon - Fri: 10:00am - 02:00am</p>
                <p>Sat - Sun: 10:00am - 03:00am</p>
                <button>view us</button>
            </div>
            <div className="contact-img">
                <img src={drink} alt="" />
            </div>
        </div>
     );
}

export default Contact;