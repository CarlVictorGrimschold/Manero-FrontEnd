
//version-3   
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login2() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  //const { setUser } = useUser();

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrorMessage(false)
          
            const result = await fetch('https://localhost:7056/api/User/Login', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            if (result.status === 200) {
                const data = await result.json();

                // Set user data in the context
                // setUser({
                //     firstName: data.result.result.firstName,
                //     lastName: data.result.result.lastName,
                //     email: data.result.result.email,
                // });

                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 7); 
                document.cookie = `apiKey=${data.result.result.apiKey}; expires=${expirationDate.toUTCString()}; path=/;`;
                localStorage.setItem("token", data.token);
                //localStorage.setItem("apiKey", data.result.result.apiKey);
                sessionStorage.setItem('apiKey', data.result.result.apiKey);
                // window.location.replace('/homepageview');
                navigate('/homepageview', { replace: true })
            } else {
                setShowErrorMessage(true)   
            }
        
        
    }

  return (
        <div className="login">
        <section className="LoginForm">
        <form onSubmit={handleSubmit}>
             <section className="labels">
                <div>
                    <div className="form-group">
                        <label className="placeholder" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            className="form-control"
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}  
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label className="placeholder" htmlFor="password">
                        Password
                        </label>
                        <input
                        id="password"
                        className="form-control"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}  
                        name="password"
                        type="password"
                        placeholder="password"
                        />
                    </div>             
                <br />
                <div className="remember-forgot-password">
                    <div className="form-group">
                    <label className="remember-me">
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                        Remember Me
                    </label>
                    </div>
                    <div className="form-group">
                    <a className="forgot-password" href="/public/forgotpassword.html">
                        Forgot Password?
                    </a>
                    </div>
                </div>
                <br />
                
                <div className="form-group">
                    <button id="signInButton" type="submit" className="sign-in-button">
                        Sign In
                    </button>
                    
                </div>
                <br />
                <div className="form-group1">
                <div className="text2">Do not have an account?</div>
                    <a className="register" href="/registerview" title="going to register site">Sign Up</a>
                        
                </div>
                <div className="errormessagelogin">
                        {
                            showErrorMessage ? (<span>Felaktig e-postadress eller lörsnord</span>) : <></>
                        }
                    </div>
                <br />
                <div className="social-icons">
                    <div className="MANERO">
                        <div className="FB">
                                <a href="/accountcreated">
                                <img src="src\Assets\images\loginimages\fbicon.png" alt="FB" />
                                </a>               

                        </div>
                        <div className="TW">
                            <img src="src\Assets\images\loginimages\twittericon.png" alt="Tw" />
                        </div>
                        <div className="GP">
                            <img src="src\Assets\images\loginimages\googleicon.png" alt="GP" />
                        </div>
                    </div>
                </div>
                </div>
             </section>
          
             </form>
        </section>
        </div>
    );
}

export default Login2;

