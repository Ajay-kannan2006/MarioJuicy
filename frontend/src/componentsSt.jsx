import Card from "./HomeScreen/card"
import HomeScreenOffers from "./HomeScreen/HomeScreenOffers"
import Filter_bar from "./FoodMenuScreen/Filter_bar"
function St(){
    return (
        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <HomeScreenOffers/>
            <Filter_bar/>
        </div>
    )
}

export default St;