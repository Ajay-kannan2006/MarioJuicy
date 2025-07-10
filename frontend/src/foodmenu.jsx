import NavBar from "./Components/MenuBar"
import Filter_bar from "./FoodMenuScreen/Filter_bar"
import Banner from "./HomeScreen/Banner"
import Header from "./HomeScreen/Header"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./HomeScreen/Card"
import './spinner.css';
const FoodMenu=()=>{
    const [items, setItem] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [category, setCategory] = useState("");
    const [offerType, setOfferType] = useState("");
    const [priceList, setPriceList] = useState(-1);
    const [spinner,setSpinner]=useState(false);
    useEffect(() => {
        setSpinner(true);
        axios.get("http://localhost:8080/home")
            .then((res) => {
                setItem(res.data.items);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        setSpinner(true);
  let arr = [...items];

  if (category !== "") {
    arr = arr.filter(item => item.category === category);
  }

  if (offerType !== "") {
    arr = arr.filter(item => item.offer === offerType);
  }

  if (priceList !== -1) {
    arr.sort((a, b) => (priceList === 0 ? a.price - b.price : b.price - a.price));
  }

  setDisplayItems(arr);
  setSpinner(false);

  
}, [category, priceList, offerType, items]);
    
    

    return (
        <>
        <Header/>
        <NavBar/>
        <Banner/>
        <Filter_bar  setCategory={setCategory} setPriceList={setPriceList} setOfferType={setOfferType}/>
        <div className='cards'>
                {(!spinner)?displayItems.map((item, index) => (
                    <Card
                        key={index}
                        item_name={item.item}
                        item_quantity={item.availablequantity}
                        item_price={item.price}
                        item_img={item.imageUrl}
                    />

                )):(<div className="spinner"></div>)}
            </div>
        </>
        

    )
}
export default FoodMenu