// import "../views/css/style.min.css";
// import { useEffect, useState } from "react";

// function UserContext(){
//         const [user,setUser] = useState({});

//         useEffect(() => {

//             const fetchData = async () => {
//                     try{
//                         const result = await fetch('https://localhost:7056/api/Profile/Get');
//                         if(result.status === 200) {
            
//                             const data = await result.json();
                            
//                             setUser(data);        
//                         }
//                         else {
//                         console.log('Error: ' + result.status);
//                         }
//                     }
//                     catch (error){ console.error('Error fetching data:', error);}
            
            
//             };
        
//             fetchData();
//         }, []);

//     return(
//         <div  className="MyProfileForm">
            
//             {/* get user name and email */}
            
//                 <div className="userinfo">
//                     <div className="containeruserinfo">
//                     {/* <p>Full Name: {user ? `${user.firstName} ${user.lastName}` : ''}</p>
//                     <p>Email: {user ? user.email : ''}</p> */}
//                     <p>Full Name: {user.firstName}- {user.lastName} </p>
//                     <p>Email: {user.email}</p>
//                     </div>
//                 </div>
            
//         </div>
//     );
// }
// export default UserContext;



//version-2  
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../views/css/style.min.css"

function UserContext() {
  //const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [user, setUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {

          const token = localStorage.getItem("token"); 
          const result = await fetch('https://localhost:7056/api/Profile/Get', {
            headers: {
              'Authorization': `Bearer ${token}`, 
            },
         });
        
        console.log(result.status);
        
        if (result.status === 200) {
          const data = await result.json();
          console.log(data);
          //setUser(data);
          setFirstName(data.user.firstName);
          setLastName(data.user.lastName);
          setEmail(data.user.email);
        } else {
          console.log('Error: ' + result.status);
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
                    {/* <div className="order-history">
                     <i className="fa-thin fa-bag-shopping"></i>
                      <p>Order History</p>
                     <i className="fa-thin fa-arrow-right"></i>
                    </div> */}
                        {/* test */}
                        <div className="container">
                            <div className="order-history">
                                <i className="fa-thin fa-bag-shopping"></i>
                                <p>Order History</p>
                            <Link to="/order-history">
                                <a>
                                 <i className="fa-thin fa-arrow-right"></i>
                                </a>
                            </Link>
                            </div>
                        </div>
                        {/* test */}

                    <div className="strek2"></div>
                    
                        <div className="payment-method">                    
                         <i className="fa-thin fa-credit-card"></i>
                         <p>Payment Method</p>
                         <Link to="/PaymentMethod"> 
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
