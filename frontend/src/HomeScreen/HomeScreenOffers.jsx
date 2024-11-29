import './HomeScreenOffers.css';
import OfferCard from './offers_card';

function HomeScreenOffers() {
  return (
    <div>
      <div className="offer-section" >
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
}

export default HomeScreenOffers;
