import spoon from "../../assets/spoon.png";

function Newsletter() {
  return (
    <div className="news-container">
      <div className="news">
        <p>Newsletter</p>
        <img src={spoon} alt="spoon" />
        <h3>subscribe to our newsletter</h3>
        <p className="miss">and never miss latest updates!</p>
        <form>
          <input type="email" placeholder="email address" />
          <button type="submit">subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
