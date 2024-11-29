<<<<<<< HEAD
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  let [st, setSt] = useState({ id: null, name: null });
  // const query = useQuery();
=======
import './App.css';
import Card from './HomeScreen/card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './HomeScreen/footer';
import Offer from './HomeScreen/offers_card';
import './HomeScreen/HomeScreenOffers.css';
import HomeOffer from './HomeScreen/HomeScreenOffers'
import MenuBar from './Components/MenuBar';

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
>>>>>>> 1f740dd11f6c87f8b543235e945c3df2373ee7b5

  useEffect(() => {

    const fetchData = async () => {
      await axios.get("http://localhost:8080/api/").then(res => {
        setSt(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

    fetchData();
  }, {});
  return (
    <>
<<<<<<< HEAD
      <h1>Users List</h1>
      <ul>
        <li><p>{st.id}</p><mark>{st.name}</mark></li>
      </ul>
    </>
    // <>
    //   <p>hello</p>
    // </>
  )
=======
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
      <MenuBar />
    </>
  );
>>>>>>> 1f740dd11f6c87f8b543235e945c3df2373ee7b5
}

export default App;
