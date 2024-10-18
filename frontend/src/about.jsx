import './about.css'
import img from './assets/milk-shake.png'
function About(){
    return (
        <div className="about-container">
        <div  className="about-image-section">
            <img src={img} alt="Milkshake"/>
        </div>
        <div className="about-text-section">
            <h2>About us</h2>
            <p>
                At our café, we offer a diverse range of delicious beverages and snacks to satisfy every craving. From refreshing milkshakes and energizing tea or coffee to flavorful Boost drinks, we’ve got something for everyone. Pair your drink with one of our signature omelets or a hearty bowl of noodles for a truly satisfying meal.
            </p>
            <button>Read more</button>
        </div>
    </div>
    )
}

export default About;