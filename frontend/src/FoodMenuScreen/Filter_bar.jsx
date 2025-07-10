import React, { useState } from 'react';
import './Filter_bar.css';
function Filter_bar({ setCategory, setOfferType, setPriceList }) {
  const [fcategory,setfCategory]=useState("");
  const [fofferType,setfOfferType]=useState("");
  const [fpriceList,setfPriceList]=useState(-1);
  const handleApply = () => {
    setCategory(fcategory);
    setOfferType(fofferType);
    setPriceList(fpriceList);
  };

  return (
    <div className='filter'>
      <div className="dropdown-container" name="dropdown-container" id="dropdown-container">
        <div className="dropdown" id="dcategory">
          <select id="category" value={fcategory} onChange={(e) => setfCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="drinks" id="op">Drinks</option>
            <option value="snacks" id="op">Snacks</option>
            <option value="meals" id="op">Meals</option>
            <option value="" id="op">all</option>
          </select>
        </div>

        <div className="dropdown" id="doffers">
          <select id="type-of-offer" value={fofferType} onChange={(e) => setfOfferType(e.target.value)}>
            <option value="">Type of Offer</option>
            <option value="buy1get1">Buy 1 Get 1</option>
            <option value="">all</option>
          </select>
        </div>

        <div className="dropdown" id="dprice">
          <select id="price-list" value={fpriceList} onChange={(e) => setfPriceList(Number(e.target.value))}>
            <option value={-1}>Price List</option>
            <option value={0}>Low to High</option>
            <option value={1}>High to Low</option>
          </select>
        </div>

        <button id="applyBtn" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
}

export default Filter_bar;
