import NavBar from "./Components/MenuBar"
import Filter_bar from "./FoodMenuScreen/Filter_bar"
import Banner from "./HomeScreen/Banner"
import Header from "./HomeScreen/Header"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./HomeScreen/Card"

const FoodMenu=()=>{
    const [items, setItem] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [category, setCategory] = useState("");
    const [offerType, setOfferType] = useState("");
    const [priceList, setPriceList] = useState(-1);
    useEffect(() => {
        axios.get("http://localhost:8080/home")
            .then((res) => {
                setItem(res.data.items);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    useEffect(() => {
        if (category === "" && offerType === "" && priceList === -1) {
          
        setDisplayItems(items);
        return;
      }

      let arr;
        if (category === "") {
            arr = items;
        }
        else {
            for (const item of items) {
                if (item.category === category) {
                    arr.push(item);
                }
            }
        }
        // let arr = items;
      if (priceList === 0) {
        arr.sort((a, b) => a.price - b.price);
      } else {
        arr.sort((a, b) => b.price - a.price);
      }

      setDisplayItems(arr);
    }, [category, priceList, offerType, items]);
    

    return (
        <>
        <Header/>
        <NavBar/>
        <Banner/>
        <Filter_bar category={category} setCategory={setCategory} priceList={priceList} setPriceList={setPriceList} offerType={offerType} setOfferType={setOfferType}/>
        <div className='cards'>
                {displayItems.map((item, index) => (
                    <Card
                        key={index}
                        item_name={item.item}
                        item_quantity={item.availablequantity}
                        item_price={item.price}
                        item_img={item.imageUrl}
                    />

                ))}
            </div>
        </>
        

    )
}
export default FoodMenu