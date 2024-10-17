import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/home")
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
        <Card key={index} item_name={item.item} item_quantity={item.availablequantity} item_price={item.price} />
      ))}
    </div>
  )
}

export default App
