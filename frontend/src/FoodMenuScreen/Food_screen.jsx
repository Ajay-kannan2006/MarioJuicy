import Filter_bar from "./Filter_bar";

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