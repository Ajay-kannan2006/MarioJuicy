import './HomeScreenOffers.css';
import bread_img from '../assets/bread.jpg';

function OfferCard({ item_name, price, item_img }) {
  return (
    <div className="offer-item">
      <img src={`${item_img}`} />
      <div className="offer-badge">{price} RUPEES ONLY</div>
      {/* <p>{ item_name}</p> */}
      <button className="order-now">ORDER NOW</button>
      <div className="offer-title">{item_name}</div>
    </div>
  );
}

export default OfferCard;