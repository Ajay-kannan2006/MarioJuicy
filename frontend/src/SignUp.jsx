import './SignUp.css';
import SignupImg from './assets/sign-up.png';

function Signup() {
    return (
        <div className="signup_page">
            <div className="signup_page_content">
                <h1>Sign-Up Page</h1>
                <div className="username">
                    <label htmlFor="signup_username">Name</label><br/>
                    <input 
                        type="text" 
                        name="name" 
                        id="signup_username" 
                        className="name" 
                        placeholder="Enter your Name" 
                        autoComplete="username"
                        required 
                    />
                </div>
                <div className="password">
                    <label htmlFor="signup_password">Password</label><br/>
                    <input 
                        type="password" 
                        id="signup_password" 
                        className="password" 
                        placeholder="Enter your password"
                        autoComplete="new-password" 
                        required 
                    />
                </div>
                <div className="confirm_password">
                    <label htmlFor="signup_confirm_password">Confirm Password</label><br/>
                    <input 
                        type="password" 
                        id="signup_confirm_password" 
                        className="password" 
                        placeholder="Enter password again" 
                        autoComplete="new-password"
                        required 
                    />
                </div>
                <button>Sign Up</button>
                <p>
                    Already have an account? <span><a href="#">Login</a></span>
                </p>
            </div>
            <div className="signup_page_image">
                <img src={SignupImg} alt="Sign Up" />
            </div>
        </div>
    );
}

export default Signup;
