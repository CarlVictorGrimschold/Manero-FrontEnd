import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup1() {

        const [firstname, setFirstName] = useState("");
        const [lastname, setLastName] = useState("");
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmpassword, setConfirmPassword] = useState('');
        const [showErrorMessage, setShowErrorMessage] = useState(false)
        const [firstnameError, setFirstnameError] = useState("");
        const [lastnameerror, setLastnameError] = useState("")
        const [emailError, setEmailError] = useState("");
        const [passwordeerror, setPasswordeError] = useState("");
        

        const navigate = useNavigate()

        const handleSubmit = async (e) => {
            e.preventDefault();
            setShowErrorMessage(false)
            setFirstnameError("");
            setEmailError("");
            setLastnameError("");
            setPasswordeError("");

            if (!firstname || !lastname || !email || !password || !confirmpassword || password !== confirmpassword) {

              if (!firstname) {
                setFirstnameError("Fyll i Förnamn");
              }
              if (!lastname){
                  setLastnameError("Fyll i Efternamn");
              }
              if (!email) {
                setEmailError("Fyll i e-postadress");
              }
              if (!password){
                setPasswordeError("Fyll i Lösenord");
              }
              setShowErrorMessage(true) 
              return;
          }
         
            const result = await fetch ('https://localhost:7056/api/User/Register', {
                method:'post',
                headers: {
                     'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstname, lastname, email, password, firstnameError, lastnameerror, emailError, passwordeerror})                
            });
              
            if (result.status === 201){
              const data = await result.json();

              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + 7); 
              document.cookie = `apiKey=${data.result.result.apiKey}; expires=${expirationDate.toUTCString()}; path=/;`;

              localStorage.setItem("token", data.token);
              //localStorage.setItem("apiKey", data.result.result.apiKey);
              sessionStorage.setItem('apiKey', data.result.result.apiKey);
              // window.location.replace("/homepageview");
              navigate('/homepageview', { replace: true })


                // const data = await result.json();
                // sessionStorage.setItem('apikey', data.apikey);
                // window.location.replace('/homepageview')
            }
            // else {
            //     setShowErrorMessage(true) 
            // }
        }
      


    return(
        <div className="register">
          <section className="RegisteerForm">
            <form onSubmit={handleSubmit}>
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
                  placeholder="Name"
                />
                 <div className="error-message">{firstnameError}</div>
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
                  placeholder="LastName"
                />
                <div className="error-message">{lastnameerror}</div>
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
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email"
                  placeholder="Email"
                />
                 <div className="error-message">{emailError}</div>
              </div>
              <br />
              <div className="form-group">
                <label className="placeholder" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                />
                <div className="error-message">{passwordeerror}</div>
              </div>
              <br />
              <div className="form-group">
                <label className="placeholder" htmlFor="confirmpassword">
                  Confirm Password
                </label>
                <input
                  className="form-control"
                  name="confirmpassword"
                  id="confirmpassword"
                  value={confirmpassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="confirm password"
                />
              </div>
              <br />
              
                <div className="sendbtn">
                  <button type="submit" className="send-button">
                    SIGN UP
                  </button>
                  {/* <a href="#">SIGNUP</a> */}
                </div>             
              
              <br />
              <div className="form-group1">
                <div className="text2">Already have an account?</div>
                <a className="sign-in" href="/loginview">
                  Sign in.
                </a>
              </div>
            </div>
          </section>
          <div className="errormessagesignup">
                {
                    showErrorMessage ? (<span>Felaktig e-postadress eller lörsnord</span>) : <> </>
                }
            </div>

            </form>
            </section>
          
        </div>
    );

}
export default Signup1;
