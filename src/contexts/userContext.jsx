import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import Popup from "../components/partials/Popup";
import Header from "../views/Components/Kevin/Header";
 
function UserContext() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageurl, setimageUrl] = useState (null);
  const [showPopup, setShowPopup] = useState(false);  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const token = localStorage.getItem("token"); 
          const result = await fetch('https://localhost:7056/api/Profile/Get', {
            headers: {
              'Authorization': `Bearer ${token}`, 
            },
         });
        
        //console.log(result);
        
        if (result.status === 200) {
          const data = await result.json();
         // console.log(data);
          setFirstName(data.user.firstName);
          setLastName(data.user.lastName);
          setEmail(data.user.email);
          setimageUrl(data.imageUrl);
          //setimageUrl(localStorage.getItem("imageurl"));
        } 
        else {
          setFirstName(localStorage.getItem("firstname"));
          setLastName(localStorage.getItem("lastname"));
          setEmail(localStorage.getItem("email"));
          //setimageUrl(localStorage.getItem("imageurl"));
          setimageUrl(localStorage.getItem("imageUrl"));
          console.log('Error: ' + result.status);
          console.log(localStorage.getItem("firstname"));
          console.log(localStorage.getItem("imageurl"));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  function signout() { 
    setShowPopup(true);
  }
  function handleConfirmSignout() { 
    setShowPopup(false);
    localStorage.removeItem("token");
    localStorage.removeItem("apiKey"); 
    window.location.href = "/loginview"; 
  }
  function handleCancelSignout() { 
    setShowPopup(false);
  }
  return (
    <div className="MyProfileForm">      
    

    
              <Header></Header>
               
     
    <Popup
        onConfirm={handleConfirmSignout}
        onCancel={handleCancelSignout}
        show={showPopup}
      /> 
      <section className="circles">
        <div className="bigcircle">
            <div className="mediumcircle">
              <img src={imageurl} alt=""/>
                <div className="smallcircle">
                    <div className="pen">
                    <Link to="/editeprofileview">
                      <i className="fa-light fa-pen"></i>
                      </Link> 
                    </div>
                </div>
            </div>
        </div>
        </section>
                <div className="userinfo">
                  <div className="container-user-info">
                    <h1> {firstName} - {lastName} </h1>
                    <p> {email}</p>
                  </div>
                </div> 
        {/* user profile option */}
        <section className="user-profile-options">
           
                        <div className="strek2"></div>
                    
                        {/* test */}
                        <div className="container">
                            <div className="order-history">
                              <div>
                                <i className="fa-thin fa-bag-shopping"></i>
                              </div>
                              <div>
                                <p>Order History</p>
                              </div>
                              <div>
                              <Link to="/order-history"> 
                                  <i className="fa-thin fa-arrow-right"></i>
                              </Link>
                              </div>
                            </div>
                        </div>
                        {/* test */}
                    <div className="strek2"></div>
                    
                        <div className="payment-method">                    
                         <i className="fa-thin fa-credit-card"></i>
                         <p>Payment Method</p>
                         <Link to ="/paymentmethodsite"> 
                          <i className="fa-thin fa-arrow-right"></i>
                         </Link>
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
                    <Link to ="/PromoCode"> 
                          <i className="fa-thin fa-arrow-right"></i>
                         </Link>
                    </div>
                    <div className="strek2"></div>
                    <div className="sign-out">
          <i className="fa-thin fa-arrow-right-from-bracket"></i>
          <p>Sign out</p>
          <a className='field' href='#' onClick={e => { signout() }} id='signout' data-testid='signout'>
          <i className="fa-thin fa-arrow-right"></i>
          </a>
        </div>
                </section>
              
       
     
    </div>
  );
}
export default UserContext;
