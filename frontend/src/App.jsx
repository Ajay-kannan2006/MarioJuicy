import './App.css';
import Card from './HomeScreen/card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './HomeScreen/footer';
import Offer from './HomeScreen/offers_card';
import './HomeScreen/HomeScreenOffers.css';
import HomeOffer from './HomeScreen/HomeScreenOffers'
import MenuBar from './Components/MenuBar';
import Header from './HomeScreen/Header';

function App() {
  const [items, setItem] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/home")
      .then((res) => {
        setItem(res.data.items);
        setOffers(res.data.offers);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <MenuBar />
      <div className='cards'>
        {items.map((item, index) => (
          <Card
            key={index}
            item_name={item.item}
            item_quantity={item.availablequantity}
            item_price={item.price}
            item_img={item.imageUrl}
          />

        ))}
      </div>

      <div className='offer-section'>
        {
          offers.map((offer, index) => (
            <Offer
              key={index}
              item_name={offer.item}
              price={offer.price - (offer.price * (offer.discount_percentage / 100))}
              item_img={offer.imageUrl}
            />
          ))
        }
      </div>
      <Footer />

    </>
  );
}

export default App;
