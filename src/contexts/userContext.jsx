//Usercontext.jsx fil 

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../views/css/style.min.css"

function UserContext() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageurl, setimageUrl] = useState (null);

  useEffect(() => {
    const fetchData = async () => {
      try {

          const token = localStorage.getItem("token"); 
          const result = await fetch('https://localhost:7056/api/Profile/Get', {
            headers: {
              'Authorization': `Bearer ${token}`, 
            },
         });
        
        console.log(result);
        
        if (result.status === 200) {
          const data = await result.json();
          console.log(data);
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

  return (
    <div className="MyProfileForm">      
       <section className="userinformation">
        {/* user edit profile */}
      <section className="circles">
        <div className="bigcircle">
            <div className="mediumcircle">
              <img src={imageurl} alt=""/>
                <div className="smallcircle">
                    <div className="pen">
                        <a href="/editeprofileview">
                          <i className="fa-light fa-pen"></i>
                        </a>
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
            </section>

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
                                  <a>
                                  <i className="fa-thin fa-arrow-right"></i>
                                  </a>
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
                    <i className="fa-thin fa-arrow-right"></i>
                    </div>
                    <div className="strek2"></div>
                    <div className="sign-out">
                    <i className="fa-thin fa-right-from-bracket"></i>
                        <p>Sign out</p>
                    <i className="fa-thin fa-arrow-right"></i>
                    </div>

                </section>

    </div>
  );
}

export default UserContext;