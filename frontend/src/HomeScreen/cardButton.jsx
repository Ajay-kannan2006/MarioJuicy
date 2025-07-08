import React, { useState } from "react";
import "./CardButton.css"; // Assuming styles are in a separate CSS file

const CardButton = () => {
    // State to manage the cart value
    const [value, setValue] = useState(0);
    // State to toggle between button and increment UI
    const [showIncrement, setShowIncrement] = useState(false);

    const handleAddToCart = () => {
        setShowIncrement(true); // Show increment UI
        setValue(1); // Initialize the value to 1
    };

    const increment = () => {
        setValue((prevValue) => prevValue + 1); // Increase value by 1
    };

    const decrement = () => {
        setValue((prevValue) => {
            if (prevValue > 1) return prevValue - 1; // Decrease value by 1 if > 1
            setShowIncrement(false); // Hide increment UI and show the button
            return 0; // Reset value to 0
        });
    };

    return (
        <div className="add-to-cart-container">
            {/* Show button or increment UI based on state */}
            {!showIncrement ? (
                <button className="add" onClick={handleAddToCart}>
                    ADD TO CART
                </button>
            ) : (
                <div className="increment">
                    <i
                        className="fa-solid fa-minus"
                        aria-label="Decrement"
                        onClick={decrement}
                    ></i>
                    <p id="value">{value}</p>
                    <i
                        className="fa-solid fa-plus"
                        aria-label="Increment"
                        onClick={increment}
                    ></i>
                </div>
            )}
        </div>
    );
};

export default CardButton;
