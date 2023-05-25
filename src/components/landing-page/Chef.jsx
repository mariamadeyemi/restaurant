import quote from "../../assets/quote.png";
import chef from "../../assets/Image.png";
import spoon from "../../assets/spoon.png";
import sign from "../../assets/Kevin.png";

function Chef() {
  return (
    <div className="chef-container">
      <img src={chef} alt="chef" />
      <div className="chef-word">
        <p>chef's word</p>
        <img src={spoon} alt="spoon" />
        <p>what we believe in</p>
        <p>
          <img src={quote} alt="" /> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Veritatis, ipsa ducimus natus repellat aperiam
          quasi, rerum numquam, tenetur corporis minima quam sint inventore
          pariatur. Deserunt.
        </p>
        <p>kevin luo</p>
        <p>chef & founder</p>
        <img src={sign} alt="kevin's signature" />
      </div>
    </div>
  );
}

export default Chef;
