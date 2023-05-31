import logo from "../../assets/logo.png";
import spoon from "../../assets/spoon.png";
import facebook from "../../assets/u_facebook-f.png";
import twitter from "../../assets/u_twitter-alt.png";
import instagram from "../../assets/u_instagram.png";
import top from "../../assets/Back to top.png";
import Newsletter from "./Newletter";



function Footer() {
    return ( 
        <footer>
            <Newsletter />
            <div className="footer-container">
                <div className="box-one">
                    <p>contact us</p>
                    <p>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </div>

                <div className="box-two">
                    <img src={logo} alt="logo" />
                    <p>"The best way to find yourself in the service of others."</p>
                    <img src={spoon} alt="spoon" />
                    <ul className="socio-icons">
                      <li><img src={facebook} alt="facebook" /></li>
                      <li><img src={twitter} alt="twitter" /></li>
                      <li><img src={instagram} alt="instagram" /></li>  
                    </ul>
                </div>

                <div className="box-three">
                    <p>working hours</p>
                    <p>Monday-Friday:</p>
                    <p>08:00am - 12:00pm</p>
                    <p>Saturday-Sunday:</p>
                    <p>07:00am - 11:00pm</p>
                </div>
            </div>
            <div className="copy">
                <p>2021 Gericht. All Rights reserved.</p>
            </div>

            <img src={top} alt="back to top" />
        </footer>
     );
}

export default Footer;