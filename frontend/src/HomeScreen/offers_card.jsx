import './HomeScreenOffers.css';
import bread_img from '../assets/bread.jpg';
import { useNavigate } from 'react-router-dom';

function OfferCard(props) {
  const navigate = useNavigate();
  return (
    <div className="offer-item">
      <img src={`${props.item_img}`} />
      <div className="offer-badge">{props.price} RUPEES ONLY</div>
      {/* <p>{ item_name}</p> */}
      
      <div className="offer-title">{props.item_name}</div>
    </div>
  );
}

export default OfferCard;