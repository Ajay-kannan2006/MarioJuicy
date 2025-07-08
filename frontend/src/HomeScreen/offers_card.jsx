import './HomeScreenOffers.css';
import bread_img from '../assets/bread.jpg';

function OfferCard(props) {
  return (
    <div className="offer-item">
      <img src={`${props.item_img}`} />
      <div className="offer-badge">{props.price} RUPEES ONLY</div>
      {/* <p>{ item_name}</p> */}
      <button className="order-now">ORDER NOW</button>
      <div className="offer-title">{props.item_name}</div>
    </div>
  );
}

export default OfferCard;