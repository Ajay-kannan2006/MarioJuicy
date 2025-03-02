import './MenuBar.css'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="menu-bar">
            <div className="nav-bar">
                <div className="nav-buttons"><Link to="/home">HOME</Link></div>
                <div className="nav-buttons"><Link to="/food_menu" >FOOD-MENU</Link></div>
                <div className="nav-buttons"><Link to="/my_orders" > MY-ORDER'S</Link></div>
                <div className="nav-buttons"><Link to="/feedback" >FEEDBACK</Link></div>
            </div>
            <div className="cart"><p><i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#FA1041", }}></i>&nbsp;&nbsp;&nbsp;&nbsp;CART</p></div>
        </div>
    );
}