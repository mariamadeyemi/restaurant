import quote from "../../assets/quote.png";
import chef from "../../assets/Image.png";
import spoon from "../../assets/spoon.png";
import sign from "../../assets/Kevin.png";

function Chef() {
  return (
    <div className="chef-container">
      <div className="chef-img">
        <img src={chef} alt="chef" />
      </div>

      <div className="chef-word">
        <p className="word">chef's word</p>
        <img src={spoon} alt="spoon" />
        <h2>what we believe in</h2>
        <p className="desc">
          <img src={quote} alt="" className="quote" /> Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Veritatis, ipsa ducimus natus
          repellat aperiam quasi, rerum numquam, tenetur corporis minima quam
          sint inventore pariatur. Deserunt.
        </p>
        <p className="chef-name">kevin luo</p>
        <p className="chef-title">chef & founder</p>
        <img src={sign} alt="kevin's signature" className="sign" />
      </div>
    </div>
  );
}

export default Chef;
