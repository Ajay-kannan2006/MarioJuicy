import './login.css';
import loginimage from './assets/login_image.png';
import axios from 'axios';
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", {
                email: email,
                password: password,
            });

            console.log(response.data);
            if(response.status === 200 &&response.data.isvalid){
                localStorage.setItem("token", response.data.token);
                showAlert("Login Successful!","success");
                setTimeout(()=>{
                    navigate('/home');
                },3000);
                
            }
            else{
                showAlert("login unsuccessful","error")
            }
        } catch (err) {
            if (err.response) {
                if (err.response.status === 404) {
                    showAlert("User not found!", "error");
                } else if (err.response.status === 401) {
                    showAlert("Invalid password!", "error");
                } else {
                    showAlert("Something went wrong. Try again!", "error");
                }
            } else {
                showAlert("Server not responding. Check your connection!", "error");
            }
        }
    };

    const showAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);

        setTimeout(() => {
            setAlertMessage(null);
        }, 5000);
    };

    return (
        
        <div className="login">
            <div className="login_image">
                <img src={loginimage} alt="Login" />
            </div>
            {alertMessage && (
                <div className={`alert-box ${alertType}`}>
                    {alertMessage}
                </div>
            )}
            <form className="login_content" onSubmit={handleSubmit}>
                <h1>Login page</h1>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your Username" 
                    required 
                    id="email"
                    autoComplete='email'
                    onChange={(event)=>{setEmail(event.target.value)}}
                />
                <label htmlFor="user_password">Password</label>
                <input 
                    type="password" 
                    id="user_password" 
                    name="password" 
                    placeholder="Enter your password" 
                    autoComplete='new-password'
                    onChange={(event)=>{setPassword(event.target.value)}}
                    required
                />
                <button>Login</button>
                <p>or</p>
                <p>
                    Login with <span><a href="#">Google</a></span>
                </p>
                <p>
                    Create a new Account <span><Link to='/'>Sign up</Link></span>
                </p>
            </form>
        </div>
    );
}

export default Login;
