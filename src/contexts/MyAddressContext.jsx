import { useEffect, useState } from "react";
import "../views/css/style.min.css";
//import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
function MyAddressContext() {

    const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const token = localStorage.getItem("token");

                const result = await fetch('https://localhost:7056/api/Address/GetAll' , {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });

                console.log(result);
                    //version-2
                    
                    if (result.status === 200) {
                        const data = await result.json();
                        
                        console.log(data);

                        if (data.length > 0) {
                            const firstAddress = data[0]; 

                            setAddresses(data);

                            console.log(firstAddress.address.streetName);
                        } else {
                            console.log('Ingen adress tillgänglig.');
                        }
                    } else {
                        console.log('Error: ' + result.status);
                        console.log('streetname' + result.address.streetName);
                    }
            } 
            catch(error)
             {
                console.log('error fetching data' , error)
             }
        }
        fetchData();
    }, []);


    const handleEditAddress = (item) => {
        // Skicka parametrarna till den andra sidan
        navigate("/addaddressview", { state: {addressData: {
            streetName: item.address.streetName,
            zipcode: item.address.zipcode,
            title: item.title,
            city: item.address.city
        } } });
    };

    return(    
        
//version-2
    <div className="MYADDRESSFORM">
        {addresses.map(item => (
        <section className="user-address" key={item.streetName}>
            <div className="home-addres-section">
                <div className="home-icon">
                    <i className="fa-regular fa-house"></i>
                </div>
                <div className="home-text">
                    <p>{item.title}</p>
                </div>
                
                <div className="streetname-zipcode">
                    <p>{item.address.streetName} {item.address.zipcode}</p>                          
                </div>
                
                <div className="home-navigate-addres">
                   {console.log('item.title', item.title)}
                    
                        <i className="fa-light fa-pen" onClick={() => handleEditAddress(item)}></i>

                </div>
            </div>
            <div className="strek2"></div>
        </section>
         ))}
    </div>

    );
}
export default MyAddressContext;