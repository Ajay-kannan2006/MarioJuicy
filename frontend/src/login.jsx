import './login.css';
import loginimage from './assets/login_image.png';

function Login() {
    return (
        
        <div className="login">
            <div className="login_image">
                <img src={loginimage} alt="Login" />
            </div>
            <div className="login_content">
                <h1>Login page</h1>
                <label htmlFor="username">Name</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter your Username" 
                    required 
                    id="username"
                    autoComplete='username'
                />
                <label htmlFor="user_password">Password</label>
                <input 
                    type="password" 
                    id="user_password" 
                    name="password" 
                    placeholder="Enter your password" 
                    autoComplete='new-password'
                    required
                />
                <button>Login</button>
                <p>or</p>
                <p>
                    Login with <span><a href="#">Google</a></span>
                </p>
                <p>
                    Create a new Account <span><a href="#">Sign In</a></span>
                </p>
            </div>
        </div>
    );
}

export default Login;
