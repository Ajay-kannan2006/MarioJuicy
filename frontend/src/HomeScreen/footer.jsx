import React, { useState } from 'react';
import './footer.css';
import footer_rightside_image from '../assets/footer_rightside_image.png'
import new_footer_image1 from '../assets/new_footer_image1.png'

function Footer() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleStarClick = (ratingValue) => {
        setRating(ratingValue);
        setFormData({
            ...formData,
            rating: ratingValue,
        })
    };

    const handleStarHover = (ratingValue) => {
        setHoverRating(ratingValue);
    };

    const handleStarMouseOut = () => {
        setHoverRating(0);
    };
    const [formData, setFormData] = useState({
        feedback_text: '',
        rating: 0,
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("Submit button clicked");
        try {
            const response = await fetch('http://localhost:8080/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
        } catch (err) {
            console.error('Error : ', err);
        }
    }
    return (
        <div className='footerDiv'>
            <footer className="footer_bar">
                <div className="footer_left_side">
                    <img className="footer-leftside-image" src={`${new_footer_image1}`} alt="footer-leftside-image" />
                </div>

                <div className="footer_right_side">
                    <img src={`${footer_rightside_image}`} alt="mario_shop_image" />
                    <div className="footer_right_side_content">
                        <h1>Feedback</h1>
                        <form onSubmit={handleSubmit}>
                            {/* <input type="email" name="email" id="footer_email" placeholder="Enter your email id" autoComplete='email' value={formData.email} onChange={handleChange} /> */}
                            <textarea name="feedback_text" id="footer_feedback" rows="7" cols="43" placeholder="Give the feedback!" value={formData.feedback_text} onChange={handleChange}></textarea>

                            <div className="footer_feedback_star">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseOver={() => handleStarHover(star)}
                                        onMouseOut={handleStarMouseOut}
                                        style={{
                                            cursor: 'pointer',
                                            color: (hoverRating || rating) >= star ? '#FFD700' : '#dcdcdc',
                                            fontSize: '2em'
                                        }}
                                    >
                                        &#9733;
                                    </span>
                                ))}
                                <button className="footer_submit_button" type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
