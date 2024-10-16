import Card from "./card"
import HomeScreenOffers from "./HomeScreenOffers"
import Filter_bar from "./Filter_bar"
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