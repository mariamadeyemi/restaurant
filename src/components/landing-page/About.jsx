import spoonLeft from "../../assets/spoon-left.png";
import spoonRight from "../../assets/spoon-right.png";
import knife from "../../assets/knive.png";

function About() {
  return (
    <div className="about">
      <div className="left">
        <h2>About Us</h2>
        <img src={spoonLeft} alt="spoon" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          assumenda culpa eligendi delectus corrupti asperiores provident animi
          tempore, unde autem nesciunt.
        </p>
        <button>Know More</button>
      </div>
      <div className="middle-img">
        <img src={knife} alt="knife image" />
      </div>
      <div className="right">
        <h2>Our History</h2>
        <img src={spoonRight} alt="spoon" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          assumenda culpa eligendi delectus corrupti asperiores provident animi
          tempore, unde autem nesciunt.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
}

export default About;
