// import "../../views/css/style.min.css";
// import { useParams, useLocation } from 'react-router-dom';
// //import  { useState } from "react";
// import { useState, useEffect } from "react";
// function AddAddressForm() {

//   const { streetName , city, title, zipcode } = useParams();  
//   const location = useLocation();
//     const addressData = location.state?.addressData || '';

//     // const [city, setCity] = useState(addressData.city || '');
//     // const [title, setTitle] = useState(addressData.title || '');
//     // const [streetNameInput, setStreetNameInput] = useState(addressData.streetName || '');
//     // const [zipcode, setZipCode] = useState(addressData.zipcode || '');
//     const [formValues, setFormValues] = useState({
//       streetName: streetName || "",
//       city: city || "",
//       title: title || "",
//       zipcode: zipcode || "",
//     });
  
//     // useEffect(() => {
//     //   // Initialisera statiska värden från location.state.addressData när komponenten monteras
//     //   if (location.state && location.state.addressData) {
//     //     const { city, title, streetName, zipcode } = location.state.addressData;
//     //     setCity(city || '');
//     //     setTitle(title || '');
//     //     setStreetNameInput(streetName || '');
//     //     setZipCode(zipcode || '');
//     //   }
//     // }, [location.state]);
//     useEffect(() => {
//       // Uppdatera formulärvärden när parametrarna ändras
//       setFormValues({
//         streetName: streetName || "",
//         city: city || "",
//         title: title || "",
//         zipcode: zipcode || "",
//       });
//     }, [streetName, city, title, zipcode]);
  

//     const handleUpdateAddress = async () => {
//       try {
//             const token = localStorage.getItem("token");
      
//             const result = await fetch(`https://localhost:7056/api/Address/Update`, {
//               method: "PUT",
//               headers: {
//                 "Authorization": `Bearer ${token}`,
//                 "Content-Type": "application/json",
//               },
//               // body: JSON.stringify({
//               //   streetName: streetNameInput,
//               //   city: city,
//               //   title: title,
//               //   zipcode: zipcode,
//               // }),
//               body: JSON.stringify(formValues),
//             });
      
//             if (result.status === 200) {
//               console.log("Address updated successfully");
//               // You may want to redirect the user or perform other actions upon success
//             } else {
//               console.error("Failed to update address:", result.status, result.statusText);
//             }
//       } 
//       catch (error) {
//         console.error("Error updating address:", error);
//       }
//     };

//     const handleChange = (e) => {
//       setFormValues({
//         ...formValues,
//         [e.target.name]: e.target.value,
//       });
//     };

//     return(
//         <div className="AddAddressForm">
          
//             <p>{addressData.streetName}</p>
//              {/* header-section */}
//              <section className="my-address">
//                 <div className="goblack">
//                 <a href="/myaddressview" className="icon-Back" title="Tillbaka till myprofile">
//                     <i className="fa fa-angle-left"></i>
//                 </a>
//                 </div>
//                 <div>
//                  <h4>Update Addres</h4>
//                 </div>
//                 <div></div>
//             </section>
//                 {/* google-maps-section */}
//             <section className="google-maps">
//                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.8080835943726!2d18.132484717443848!3d59.18578689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7b9074a99c31%3A0x33fb23ace1ef639c!2sNordkapsv%C3%A4gen%201%2C%20136%2058%20Haninge!5e0!3m2!1ssv!2sse!4v1676467041988!5m2!1ssv!2sse" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//              </section>

//                 <div><p>{streetName}</p> </div>

//                 {/* user-addnewaddress-section */}
//              <section className="user-addnewaddress">
//                 <div className="addnewaddres">

//                 <div className="form-group">
//                     <label className="placeholder" htmlFor="city">
//                         city
//                     </label>
//                     <input
//                         className="form-control"
//                         name="city"
//                         id="city"
//                           //  value={addressData.city}
//                           // onChange={(e) => setCity(e.target.value)}
//                           value={formValues.city}
//                           onChange={handleChange}
//                         type="text"                        
//                     />
//                     </div>
//                     <br/>
//                 <div className="form-group">
//                     <label className="placeholder" htmlFor="title">
//                         title
//                     </label>
//                     <input
//                         className="form-control"
//                         name="title"
//                         id="title"
//                           //  value={addressData.title}
//                           // onChange={(e) => setTitle(e.target.value)}
//                           value={formValues.title}
//                           onChange={handleChange}
//                         type="text"
//                     />
//                     </div>
//                     <br/>
//                     <div className="form-group">
//                     <label className="placeholder" htmlFor="streetname">
//                         StreetName
//                     </label>
//                     <input
//                         className="form-control"
//                         name="streetname"
//                         id="streetname"
//                           //  value={addressData.streetName}
//                           // onChange={(e) => setStreetNameInput(e.target.value)}
//                           value={formValues.streetName}
//                           onChange={handleChange}
//                         type="text"
//                     />
//                     </div>
//                             <br/>
//                     <div className="form-group">
//                         <label className="placeholder" htmlFor="zipcode">
//                             ZipCode
//                         </label>
//                         <input
//                             className="form-control"
//                             name="zipcode"
//                             id="zipcode"
//                             //  value={addressData.zipcode}
//                             //  onChange={(e) => setZipCode(e.target.value)}
//                             value={formValues.zipcode}
//                           onChange={handleChange}
//                             type="text"
//                         />
//                     </div>
//                             {/* submit-button */}
//                         <div   className="create-user-section">
//                             <button onClick={handleUpdateAddress} className="create-user-button">
//                                 SUBMIT
//                             </button>
//                         </div>
//                 </div>


//              </section>

//         </div>
//     );
// }
// export default AddAddressForm;


//version-2
import { useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';

function AddAddressForm() {
  const { streetName } = useParams();
  const location = useLocation();
  const addressData = location.state?.addressData || '';
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    streetName: addressData.streetName || "",
    city: addressData.city || "",
    title: addressData.title || "",
    zipcode: addressData.zipcode || "",
  });

  const handleUpdateAddress = async () => {
    try {      
          const token = localStorage.getItem("token");

          const result = await fetch(`https://localhost:7056/api/Address/Update?title=${addressData.title}`, {
            method: "PUT",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          });

          if (result.status === 200) {
            console.log("Address updated successfully");
            navigate("/myaddressview")
            
          }    
            
          else {
            console.error("Failed to update address:", result.status, result.statusText);
          }
    } 
    catch (error) {
      console.error("Error updating address:", error);
    }
    
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      
    });
  };

  return (
    <div className="AddAddressForm">
       {/* header-section */}
              <section className="my-address">
                 <div className="goblack">
                 <a href="/myaddressview" className="icon-Back" title="Tillbaka till myprofile">
                     <i className="fa fa-angle-left"></i>
                 </a>
                 </div>
                 <div>
                  <h4>Update Addres</h4>
                 </div>
                 <div></div>
             </section>
             {/* google-maps-section */}
             <section className="google-maps">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.8080835943726!2d18.132484717443848!3d59.18578689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7b9074a99c31%3A0x33fb23ace1ef639c!2sNordkapsv%C3%A4gen%201%2C%20136%2058%20Haninge!5e0!3m2!1ssv!2sse!4v1676467041988!5m2!1ssv!2sse" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </section>


      <p>{streetName}</p>
      {/* user-addnewaddress-section */}
             <section className="user-addnewaddress">  
             <div>
              
                                
              <div className="form-group">
                <label className="placeholder" htmlFor="city">
                  city
                </label>
                <input
                  className="form-control"
                  name="city"
                  id="city"
                  value={formValues.city}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <br/>
              <div className="form-group">
                <label className="placeholder" htmlFor="streetname">
                  streetName
                </label>
                <input
                  className="form-control"
                  name="streetName"
                  id="streetName"
                  value={formValues.streetName}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <br/>
              <div className="form-group">
                <label className="placeholder" htmlFor="title">
                  title
                </label>
                <input
                  className="form-control"
                  name="title"
                  id="title"
                  value={formValues.title}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <br/>
              <div className="form-group">
                <label className="placeholder" htmlFor="zipcode">
                  zipcode
                </label>
                <input
                  className="form-control"
                  name="zipcode"
                  id="zipcode"
                  value={formValues.zipcode}
                  onChange={handleChange}
                  type="text"
                />
              </div>

              <div className="create-user-section">
                <button onClick={handleUpdateAddress} className="create-user-button">
                  SUBMIT
                </button>
              </div>
              </div>
      </section>
    </div>
  );
}

export default AddAddressForm;
