import React from "react";
import "./css/banner.css";
import juiceImg from "./images/juice.png";
import burgerImg from "./images/burger.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
    <div className="banner">
      <img src={juiceImg} alt="Orange Juice" className="banner-img" />
      <div className="text-content">
        <h1>
          <span className="buy">BUY 1</span>
          <br />
          <span className="get">GET 1</span> <span className="offer">OFFER</span>
        </h1>
        <p className="description">
          50 Items available for this offer. Limited-time offer for Sri Eshwar College students.
        </p>
          {/* <a href="#" className="order-btn">ORDER NOW</a> */}
          <button className="order-btn" onClick={()=>{navigate("/food_menu");}}>ORDER NOW</button>
      </div>
      <img src={burgerImg} alt="Burger" className="banner-img" />
    </div>
    </div>
  );
};

export default Banner;