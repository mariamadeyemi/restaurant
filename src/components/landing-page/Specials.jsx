import spoon from "../../assets/spoon.png";
import bottle from "../../assets/bottle.png";

function Specials() {
  return (
    <div className="specials">
      <p>Menu that fits you palette</p>
      <img src={spoon} alt="spoon" />
      <h2>Today's Special</h2>

      <div className="drinks">
        <div className="wine">
          <p>wine & beer</p>
          chapel hill shiraz $56 AU | Bottle catena malbee $59 AU | Bottle la
          vieille rose $44 FR | 750ml rhino pale ale $31 CA | 750ml irish
          guiness $26 IE | 750ml
        </div>
        <div className="middle-bottle">
          <img src={bottle} alt="bottle img" />
        </div>
        <div className="cocktails">
          <p>cocktails</p>
          aperol spritz $20 Aperol | Villa marchesi prosecco | soda | 30ml dark
          'N' stormy $16 dark rum | ginger beer | slice of lime daiquiri $10 rum
          | citrus juice | sugar old fashioned $31 bourbon | brown sugar |
          angostura bitters negroni $26 gin | sweet vermouth | campari | orange
          garnish
        </div>
      </div>
      <button>view more</button>
    </div>
  );
}

export default Specials;
