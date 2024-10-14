import './card.css';

function Card() {
  return (
    <div className="cart">
      <div className="image_cart"></div>
      <div className="cart_content">
        {/* <h4 style={{ color: '#037014' }}>Category: Ice Cream</h4> */}
        <h4 style={{ color: '#FA1041' }}>Chocolate Ice Cream</h4>
        <div className="quantity" style={{ color: '#037014' }}>
          <h4>Quantity:</h4>
          <p id="Chocolate_ice_cream_quantity" style={{ color: '#037014' }}>10</p>
        </div>
        <div className="cart_footer">
          <button>Add Cart</button>
          <p>Price: $10</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
