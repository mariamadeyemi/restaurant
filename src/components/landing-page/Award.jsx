import spoon from "../../assets/spoon.png";

function Award() {
  return (
    <div className="award-contianer">
      <div className="awards">
        <p>awards & recognition</p>
        <img src={spoon} alt="spoon" />
        <p>our laurels</p>
        <div className="award-list"></div>
      </div>
    </div>
  );
}

export default Award;
