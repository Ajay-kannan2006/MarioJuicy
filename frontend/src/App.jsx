import './App.css'
import Card from './HomeScreen/card'
import Filter_bar from './FoodMenuScreen/Filter_bar'
import { useState, useEffect } from 'react';
import axios from 'axios';

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
      {items.map((item, index) => (
        <Card key={index} item_name={item.item_name} item_quantity={item.item_quantity} item_price={item.item_price} />
      ))}
    </div>
  )
}

export default App
