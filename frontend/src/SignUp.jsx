import './SignUp.css'
import SignupImg from './assets/sign-up.png'
function Signup()
{
    return (
        <div>
            <div class="signup_page">
            
            <div class="signup_page_content">
               <h1>Sign-Up Page</h1>
                <div class="username">
                     <label for="signup_username">Name</label><br/>
                     <input type="text" name="name" id="signup_username" class="name" placeholder="Enter your Name " required/>
                </div>
                <div class="password">
                    <label for="signup_password">Password</label><br/>
                    <input type="password" id="signup_password" class="password" placeholder="Enter your password" required/>
                </div>
                <div class="confirm_password">
                   <label for="signup_confirm_password">Confirm Password</label>
                   <input type="password" id="signup_confirm_password" class="password" placeholder="Enter password again" required/>
                </div>
                <button>Sign Up</button>
                <p>Already you Have an Account <span>Login</span></p>
            </div>
            <div class="signup_page_image">
                <img  src={`${SignupImg}`} alt=""/>
           </div>

         </div>
        </div>
    )
}

export default Signup;