import { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import SignupImg from './assets/sign-up.png';
import { Link, useNavigate } from "react-router-dom";
function Signup() {
    const [name,setname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState("");
    const navigator=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(password!=confirmPassword){
            showAlert("password doesn't match","error");
        }
        else{
        try {
            const response = await axios.post("http://localhost:8080/signup", {
                name,
                email,
                password
            });
            showAlert("signup successful","success")
            setTimeout(() => {
                navigator("/login");
            }, 3000);
        } catch (err) {
            console.error("Signup error:");
            if (err.response && err.response.data.error) {
                showAlert(err.response.data.error,"error");
            } else {
                showAlert("Signup failed, please try again.","error");
            }
        }
    }

    }
    const showAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);

        setTimeout(() => {
            setAlertMessage(null);
        }, 5000);
    };
    return (
        <div className="signup_page">
            <div className="signup_page_content">
            {alertMessage && (
                <div className={`alert-box ${alertType}`}>
                    {alertMessage}
                </div>
            )}
                <form onSubmit={handleSubmit}>
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
                        onChange={(event)=>setname(event.target.value)}
                        required 
                    />
                </div>
                <div className="email">
                    <label htmlFor="signup_email">Email</label><br/>
                    <input 
                        type="email " 
                        name="email" 
                        id="signup_email" 
                        className="email" 
                        placeholder="Enter your email" 
                        autoComplete="email"
                        onChange={(event)=>setEmail(event.target.value)}
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
                        onChange={(event)=>setPassword(event.target.value)}
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
                        onChange={(event)=>setConfirmPassword(event.target.value)}
                        required 
                    />
                </div>
                <button>Sign Up</button>
                </form>
                <p>
                    Already have an account? <span><Link to='/login'>Login</Link></span>
                </p>

            </div>
            <div className="signup_page_image">
                <img src={SignupImg} alt="Sign Up" />
            </div>
        </div>
    );
}

export default Signup;
