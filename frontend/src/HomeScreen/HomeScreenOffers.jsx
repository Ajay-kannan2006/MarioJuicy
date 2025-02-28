import { useEffect, useState } from 'react';
import './HomeScreenOffers.css';
import OfferCard from './offers_card';
import axios from 'axios'

function HomeScreenOffers() {
  const [OfferCardParams,setOfferCardParams]=useState([]);
  useEffect(()=>{
    const fetchoffer=async()=>{
    try{
    const res=await axios.get("http://localhost:8080/offers");
    if(res.data.offer){
      setOfferCardParams(res.data.offer);
    }
  }catch(e){
    console.log("can't get the offers");
  }
 } 
 fetchoffer();
},[])
  return (
    <div>-
      <div className="offer-section" >
      {OfferCardParams.length > 0 ? (
          OfferCardParams.map((offer, index) => (
            <OfferCard 
              key={index}
              item_name={offer.item}
              price={offer.price}
              item_img={offer.imageUrl}
            />
          ))
        ) : (
          <p>Loading offers...</p>
        )}
      </div>
    </div>
  );
}

export default HomeScreenOffers;
