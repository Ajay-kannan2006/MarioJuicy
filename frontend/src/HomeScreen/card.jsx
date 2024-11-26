import './card.css';
import card_img from '../assets/card2.jpeg';

function Card({ item_name, item_quantity, item_price }) {
  const isLoading = !item_name || !item_quantity || !item_price; // Check if data is missing

  return (
    <div className="cart">
      <div className="image_cart" style={{ backgroundImage: `url(${card_img})` }}></div>
      <div className="cart_content">
        {/* Item Name */}
        <h4 style={{ color: '#FA1041' }}>
          {isLoading ? <div className="spinner"></div> : item_name}
        </h4>

        {/* Quantity */}
        <div className="quantity" style={{ color: '#037014' }}>
          <h4>Quantity:</h4>
          <p id="Chocolate_ice_cream_quantity" style={{ color: '#037014' }}>
            {isLoading ? <div className="spinner"></div> : item_quantity}
          </p>
        </div>

        {/* Footer: Button and Price */}
        <div className="cart_footer">
          <button disabled={isLoading}>
            {isLoading ? <div className="spinner small-spinner"></div> : 'Add Cart'}
          </button>
          <p>
            Price: {isLoading ? <div className="spinner"></div> : `$${item_price}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
