import Header from './HomeScreen/Header'
import HomeScreenOffers from './HomeScreen/HomeScreenOffers'
import Banner from './HomeScreen/Banner'
import NavBar from './Components/MenuBar'
import About from './about'
import FoodCategory from './HomeScreen/foodCategory'
import Footer from './HomeScreen/footer'
import OfferCard from './HomeScreen/offers_card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './HomeScreen/Card'
const Home = () => {
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
      <div>
        <Header />
        <NavBar />
        <Banner />

        <About />
        <div className="offer-section">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              item_name={offer.item}
              price={
                offer.price - offer.price * (offer.discount_percentage / 100)
              }
              item_img={offer.imageUrl}
            />
          ))}
        </div>
        {/* <div className="cards">
          {items.map((item, index) => (
            <Card
              key={index}
              item_name={item.item}
              item_quantity={item.availablequantity}
              item_price={item.price}
              item_img={item.imageUrl}
            />
          ))}
        </div> */}
        {/* <FoodCategory /> */}
        <Footer />
      </div>
    );
}
export default Home