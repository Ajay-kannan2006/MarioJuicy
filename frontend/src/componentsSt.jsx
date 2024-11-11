import Card from "./HomeScreen/card"
import HomeScreenOffers from "./HomeScreen/HomeScreenOffers"
import Filter_bar from "./FoodMenuScreen/Filter_bar"
import Footer from "./HomeScreen/footer"
import FoodCategory from "./HomeScreen/foodCategory"
import Signup from "./SignUp"
import Login from "./login"
import About from "./about"
function St() {
    return (
        <div >
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <HomeScreenOffers />
            <Filter_bar />
            <Footer />
            <FoodCategory />
            <Signup />
            <Login/>
            <About/>
        </div>
    )
}

export default St;