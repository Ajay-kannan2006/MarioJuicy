import './App.css';
import Card from './card';
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
      {/* <p>{items[0].item_name}</p> */}
      {items.map((item, index) => (
        <Card key={index} item_name={item.item_name} item_quantity={item.item_quantity} item_price={item.item_price} />
      ))}
    </div>
  )
}

export default App
