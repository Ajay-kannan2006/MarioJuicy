import React, { useState } from 'react';
import './Filter_bar.css';
function Filter_bar({ category, setCategory, offerType, setOfferType, priceList, setPriceList }) {
  
  const handleApply = () => {
    console.log(`Category: ${category}, Offer Type: ${offerType}, Price List: ${priceList}`);
  };

  return (
    <div className='filter'>
      <div className="dropdown-container" name="dropdown-container" id="dropdown-container">
        <div className="dropdown" id="dcategory">
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="drinks" id="op">Drinks</option>
            <option value="snacks" id="op">Snacks</option>
            <option value="meals" id="op">Meals</option>
          </select>
        </div>

        <div className="dropdown" id="doffers">
          <select id="type-of-offer" value={offerType} onChange={(e) => setOfferType(e.target.value)}>
            <option value="">Type of Offer</option>
            <option value="discount">Discount</option>
            <option value="cashback">Cashback</option>
            <option value="buy1get1">Buy 1 Get 1</option>
          </select>
        </div>

        <div className="dropdown" id="dprice">
          <select id="price-list" value={priceList} onChange={(e) => setPriceList(e.target.value)}>
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
