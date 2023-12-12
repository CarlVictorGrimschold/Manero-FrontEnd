//MyProfileForm.jsx fil 

import { Link } from 'react-router-dom';
import "../../contexts/userContext";
import "../../views/css/style.min.css";
function MyProfile(){

    return(
        <div className="Profile-Form">
            <section className="MyProfileForm">            
            <header>
                <div className="Hbar">
                    <a className="link">
                         <i className="fa-regular fa-bars"></i>
                    </a>
                    </div>
                    <div className="Logotype">
                        <a className="logo" href="index.html">My Profile</a>
                        </div>
                    <div className="Shopping-cart">
                    <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i>
                    </a>
                </div>
            </header>
                </section>
        </div>
    );
}
export default MyProfile;