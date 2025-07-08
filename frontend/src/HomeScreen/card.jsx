import './card.css';
import card_img from '../assets/card2.jpeg';
import CardButton from './cardButton';

function Card({ item_name, item_quantity, item_price, item_img }) {
  // console.log(item_img);
  return (
    <div className="card">
      <div className="image-card" style={{ backgroundImage: `url(${item_img})` }}></div>
      <div className="card-content">
        <h4 style={{ color: '#FA1041' }}>{item_name}</h4>
        <div className="quantity" style={{ color: '#037014' }}>
          <h4>Quantity:</h4>
          <p id="Chocolate_ice_cream_quantity" style={{ color: '#037014' }}>{item_quantity}</p>
        </div>
        <div className="card-footer">
          <CardButton />
          <p>Price: ${item_price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
