import BuyOneOffer from "./BuyOneOffer";
import Filter_bar from "./Filter_bar";

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