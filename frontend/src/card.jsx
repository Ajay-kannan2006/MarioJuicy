import './card.css';
import card_img from './card2.jpeg';


function Card({ item_name, item_quantity, item_price }) {
  return (
    <div className="cart">
      <div className="image_cart" style={{ backgroundImage: `url(${card_img})` }}></div>
      <div className="cart_content">
        <h4 style={{ color: '#FA1041' }}>{item_name}</h4>
        <div className="quantity" style={{ color: '#037014' }}>
          <h4>Quantity:</h4>
          <p id="Chocolate_ice_cream_quantity" style={{ color: '#037014' }}>{item_quantity}</p>
        </div>
        <div className="cart_footer">
          <button>Add Cart</button>
          <p>Price: ${item_price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
