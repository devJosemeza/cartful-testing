import { product } from "../../data/products";
import { BestMatchTableStyles } from "./BestMatchStyles"
import TastingNotesIcon  from '@/../../public/assets/icons/Tasting-Notes.svg';
import RoastLevelIcon  from '@/../../public/assets/icons/roast-level.svg';
import SippingStyleIcon  from '@/../../public/assets/icons/sipping-style.svg';
import BrewMethodIcon  from '@/../../public/assets/icons/brew-method.svg';

export const BestMatchTable = () => {


    return (
      <BestMatchTableStyles>
        <div className="product-featured">
            <h3>Best Match</h3>
            <img className="product-image" src={product.image} alt={product.name} />
            <small className="product-name">{product.name}</small>
            <p className="price">${product.price.toFixed(2)}</p>
        </div>

        <div className="product-info">
          <div className="top">
            <h4 className="section-title">Why You'll Love It</h4>
            <p className="description">{product.why_you_love_it}</p>
          </div>

          <div className="notes">
            <div className="note-item">
              <h4 className="section-title">Tasting Notes</h4>
              <img src={TastingNotesIcon} alt="Tasting Notes"/>
              <p>{product.tasting_notes.join(', ')}</p>
            </div>
            <div className="note-item">
              <h4 className="section-title">Roast Level</h4>
              <img src={RoastLevelIcon} alt="Roast Level"/>
              <p>{product.roast_level}</p>
            </div>
            <div className="note-item">
              <h4 className="section-title">Sipping Style</h4>
              <img src={SippingStyleIcon} alt="Sipping Style"/>
              <p>{product.sipping_style}</p>
            </div>
            <div className="note-item no-dashed">
              <h4 className="section-title">Brew Method</h4>
              <img src={BrewMethodIcon} alt="Brew Method"/>
              <p>{product.brew_method}</p>
            </div>
          </div>
          
        </div>
        
      </BestMatchTableStyles>
    );
}