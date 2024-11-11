import BuyOneOffer from "./BuyOneOffer";
import Filter_bar from "./Filter_bar";
import Header from "./Header";
import './layout.css'
import Cards from "./Cards";
import Footer from "./Footer";
export default function FoodScreen() {
    return (
        <div className="home-screen">
            <Header />
            <BuyOneOffer />
            <Filter_bar />
            <Cards />
            <Footer />

        </div>
    );
}