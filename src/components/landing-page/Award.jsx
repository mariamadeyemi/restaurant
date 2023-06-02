import spoon from "../../assets/spoon.png";
import two from "../../assets/no5.png";
import one from "../../assets/no1.png";
import five from "../../assets/no3.png";
import three from "../../assets/no2.png";
import gpic from "../../assets/Group43.png";

function Award() {
  return (
    <div className="award-container">
      <div className="awards">
        <div className="award-heading">
          <p>awards & recognition</p>
          <img src={spoon} alt="spoon" />
          <h2>our laurels</h2>
        </div>

        <div className="award-list">
          <div className="grp-one">
            <div className="award-grp">
              <img src={two} alt="number two" />
              <div className="award-desc">
                <p>Bib Gourmond</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="award-grp">
              <img src={one} alt="number one" />
              <div className="award-desc">
                <p>Rising Star</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>

          <div className="grp-two">
            <div className="award-grp">
              <img src={five} alt="number five" />
              <div className="award-desc">
                <p>AA Hospitality</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="award-grp">
              <img src={three} alt="number three" />
              <div className="award-desc">
                <p>Outstanding Chef</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="award-img">
        <img src={gpic} alt="image of suptious meal" />
      </div>
    </div>
  );
}

export default Award;
