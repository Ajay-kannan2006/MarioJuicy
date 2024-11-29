import './Header.css';
import marioLogo from './images/mario-logo.png'
import profileImg from './images/bread.jpg'
export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="mario-logo" ></div>
                <div className="mario-text">MARIOJUICY</div>
                <div className="mario-location">
                    <i className="fa-solid fa-location-dot fa-xl fa-bounce"></i>
                    <p className="location-text">Sri Eshwar College Of Engineering</p>
                </div>
            </div>
            <div className="header-center">
                <i class="fas fa-search search-icon fa-beat"></i>
                <input type="text" placeholder='search your order' className='search-box' />
            </div>
            <div className="header-right">
                <i class="fa-regular fa-heart fa-xl heart"></i>
                <div className="user-info">
                    <div className="user-logo"><i class="fa-regular fa-user fa-xl"></i></div>
                    <div className="user-name">MARIO ADMIN</div>
                </div>

            </div>
        </div>
    );

}