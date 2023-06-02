import spoon from "../../assets/spoon.png";
import bottle from "../../assets/bottle.png";

function Specials() {
  return (
    <div className="specials">
      <div className="specials-heading">
        <p>Menu that fits your palette</p>
        <img src={spoon} alt="spoon" />
        <h2>Today's Special</h2>
      </div>

      <div className="drinks">
        <div className="wine">
          <p className="title">wine & beer</p>
          <div className="row">
            <div className="column">
              <p>chapel hill shiraz</p>
              <p>$56</p>
            </div>
            <p>AU | Bottle</p>
          </div>

          <div className="row">
            <div className="column">
              <p>catena malbee</p>
              <p>$59</p>
            </div>
            <p>AU | Bottle</p>
          </div>

          <div className="row">
            <div className="column">
              <p>la vieille rose</p>
              <p>$44</p>
            </div>
            <p>FR | 750ml</p>
          </div>

          <div className="row">
            <div className="column">
              <p>rhino pale ale</p>
              <p>$31</p>
            </div>
            <p>CA | 750ml </p>
          </div>

          <div className="row">
            <div className="column">
              <p>irish guiness</p>
              <p>$26</p>
            </div>
            <p>IE | 750ml</p>
          </div>
        </div>
        <div className="middle-bottle">
          <img src={bottle} alt="bottle img" />
        </div>
        <div className="cocktails">
          <p className="title">cocktails</p>

          <div className="row">
            <div className="column">
              <p>aperol spritz</p>
              <p>$20</p>
            </div>
            <p>Aperol | Villa marchesi prosecco | soda | 30ml</p>
          </div>

          <div className="row">
            <div className="column">
              <p>dark 'N' stormy</p>
              <p>$16</p>
            </div>
            <p>dark rum | ginger beer | slice of lime</p>
          </div>

          <div className="row">
            <div className="column">
              <p>daiquiri</p>
              <p>$10</p>
            </div>
            <p>rum | citrus juice | sugar</p>
          </div>

          <div className="row">
            <div className="column">
              <p>old fashioned</p>
              <p>$31</p>
            </div>
            <p>bourbon | brown sugar | angostura bitters</p>
          </div>

          <div className="row">
            <div className="column">
              <p>negroni</p>
              <p>$26</p>
            </div>
            <p>gin | sweet vermouth | campari | orange garnish</p>
          </div>
        </div>
      </div>
      <div className="specials-button">
        <button>view more</button>
      </div>
    </div>
  );
}

export default Specials;
