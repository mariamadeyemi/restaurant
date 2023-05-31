import spoon from "../../assets/spoon.png";
import picone from "../../assets/1.png";
import pictwo from "../../assets/Mask Group(1).png";
import picthree from "../../assets/3.png";
import picfour from "../../assets/5.png";



function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-desc">
        <p>Instagram</p>
        <img src={spoon} alt="spoon" />
        <p>Photo Gallery</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo praesentium quam voluptate. Enim quam possimus repudiandae numquam?</p>
        <button>View More</button>
      </div>

      <div className="gallery">
        <img src={picone} alt="" />
        <img src={pictwo} alt="" />
        <img src={picthree} alt="" />
        <img src={picfour} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
