import './App.css'
import Card from './card'
import Filter_bar from './Filter_bar'
import './App.css';
import Card from './card';
import { useState, useEffect } from 'react';
import axios from 'axios';

import HomeScreenOffers from './HomeScreenOffers'
function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api")
      .then((res) => {
        setItem(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className='cards'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Filter_bar />
      {/* <p>{items[0].item_name}</p> */}
      {items.map((item, index) => (
        <Card key={index} item_name={item.item_name} item_quantity={item.item_quantity} item_price={item.item_price} />
      ))}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Filter_bar/>
      <HomeScreenOffers/>
    </div>
  )
}

export default App
