import NavBar from "./Components/MenuBar"
import Filter_bar from "./FoodMenuScreen/Filter_bar"
import Banner from "./HomeScreen/Banner"
import Header from "./HomeScreen/Header"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./HomeScreen/Card"

const FoodMenu=()=>{
    const [items, setItem] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/home")
            .then((res) => {
                setItem(res.data.items);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <>
        <Header/>
        <NavBar/>
        <Banner/>
        <Filter_bar/>
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
        </>
        

    )
}
export default FoodMenu