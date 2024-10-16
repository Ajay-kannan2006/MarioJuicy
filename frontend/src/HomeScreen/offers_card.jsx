import './HomeScreenOffers.css';
import bread_img from '../assets/bread.jpg';

function OfferCard()
{
    return (
        <div className="offer-item">
          <img src={`${bread_img}`} />
          <div className="offer-badge">30 RUPEE ONLY</div>
          <button className="order-now">ORDER NOW</button>
          <div className="offer-title">SANDWICH</div>
        </div>
    );
}

export default OfferCard;