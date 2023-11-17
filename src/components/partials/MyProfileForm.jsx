import { Link } from 'react-router-dom';
import "../../views/css/style.min.css";

function MyProfile(){
    return(
        <div>
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

            <div className="strek">
                |
            </div>

            <section className="circles">

                <div className="bigcircle">
                    <div className="mediumcircle">
                        <div className="smallcircle">
                            <div className="pen">
                              <i className="fa-light fa-pen"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <section className="user-profile-options">
                        <div className="strek2"></div>
                    <div className="order-history">
                     <i className="fa-thin fa-bag-shopping"></i>
                      <p>Order History</p>
                     <i className="fa-thin fa-arrow-right"></i>
                    </div>
                    <div className="strek2"></div>
                    <div className="payment-method">                    
                    <i className="fa-thin fa-credit-card"></i>
                    <p>Payment Method</p>
                    <i className="fa-thin fa-arrow-right"></i>
                    </div>
                    <div className="strek2"></div>
                    <div className="my-address">
                    <i className="fa-thin fa-location-dot"></i>
                        <p>My Address</p>
                    <i className="fa-thin fa-arrow-right"></i>
                    </div>
                    <div className="strek2"></div>
                    <div className="my-promocodes">
                    <i className="fa-thin fa-rectangle-ad"></i>
                    <p>My Promocodes</p>
                    <i className="fa-thin fa-arrow-right"></i>
                    </div>
                    <div className="strek2"></div>
                    <div className="sign-out">
                    <i className="fa-thin fa-right-from-bracket"></i>
                        <p>Sign out</p>
                    <i className="fa-thin fa-arrow-right"></i>
                    </div>

                </section>





                <footer>
                    <Link to="/homepageview">
                        <div>
                            <a className="link">
                                <i className="fa-solid fa-house"></i>
                            </a>
                        </div>
                        
                    </Link>
                    <Link to ="/myprofile">
                        <div>
                                <a className="/myprofile" href="#">
                                    <i className="fa-regular fa-circle-user">
                                    </i>
                                </a>
                            </div>
                    </Link>
                </footer>
                </section>
        </div>
    );
}
export default MyProfile;
