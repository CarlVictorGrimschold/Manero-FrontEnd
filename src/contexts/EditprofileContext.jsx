//EditProfilecontext.jsx fil 



import { useEffect, useState } from "react";

function EditprofileContext() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [imageurl, setimageUrl] = useState('');
  
  //var imageUrl = 'https://i.ytimg.com/vi/L2w9LvMb3io/maxresdefault.jpg';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const result = await fetch('https://localhost:7056/api/Profile/Get', {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        });

        if (result.status === 200) {
          const data = await result.json();
          
          setFirstName(data.user.firstName);
          setLastName(data.user.lastName);
          //setimageUrl(data.user.imageUrl);
          //setEmail(localStorage.getItem("email"));
          setEmail(data.user.email);
          //setImageUrl(data.user.imageUrl);
          setPhoneNumber(data.phoneNumber);
          setLocation(data.location);
          setimageUrl(data.imageUrl);
        } else {
          console.log('Error: ' + result.status);

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //camera-icon-funktion
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Uppdatera profilbild 
    const reader = new FileReader();
    reader.onload = () => {
      setimageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageDelete = () => {
    // Uppdatera profilbild
    setimageUrl('');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const result = await fetch('https://localhost:7056/api/Profile/Update', {
        method: 'PUT', 
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          firstname,
          lastname,
          imageurl,
          phonenumber,
          location,
        }),
      });

      if (result.status === 200) {
        console.log('Changes saved successfully!');
        setSuccessMessage('Changes saved successfully!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to save changes.');
        console.log('Error: ' + result.status);
      }
    } catch (error) {
      console.error('Error saving changes:', error);
      setSuccessMessage('');
      setErrorMessage('Failed to save changes.');
    }
  };

  return (
    <div className="EDITE-PROFILE">
      {/* user-edit-information */}
      <section className="user-edit-information">
        <form>

          {/* user edit img */}
          <section className="circles">
              <div className="bigcircle">
                  <div className="mediumcircle">
                  <img src={imageurl} alt="" />

                      <div className="smallcircle">
                          
                        <label htmlFor="imageInput">
                          <i className="fa-thin fa-camera"></i>
                        </label>

                        <input
                          id="imageInput"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />                        
                            {imageurl && (
                              <i className="fa-thin fa-trash" onClick={handleImageDelete}></i>
                            )}
                                
                    </div>
                  </div>
                    
              </div>
            </section>
            
          <section className="labels">
            <div>
              <div className="form-group">
                <label className="placeholder" htmlFor="Name">
                  Name
                </label>
                <input
                  className="form-control"
                  name="Name"
                  id="Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="placeholder" htmlFor="LastName">
                  Last Name
                </label>
                <input
                  className="form-control"
                  name="LastName"
                  id="LastName"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="placeholder" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  disabled
                //   onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="placeholder" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="placeholder" htmlFor="location">
                  Location
                </label>
                <input
                  className="form-control"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Enter your location"
                />
              </div>
              <br />
             
               <div className="create-user-section">
                <button onClick={handleSubmit} className="create-user-button">
                    SUBMIT
                </button>
                </div>
                {successMessage && (
                <div className="success-message">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}
            </div>
          </section>
        </form>
      </section>
    </div>
  );
}

export default EditprofileContext;