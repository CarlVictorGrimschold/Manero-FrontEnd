import '../../contexts/AuthContext';
import '../../views/css/style.min.css';


function LoginForm(){
 
  return (
    <div className="LoginForm">
      <section>

            
            <section className="signin">
              <h4 className="custom-font" >Sign In</h4>
            </section>
            <section className="welcome-section">
              <h1 className="welcome-back">Welcome Back</h1>
            </section>
            <div className="text1">sign in to continue</div>


            
            {/* <section className="labels">
              <div>

                <div className="form-group">
                    <label className="placeholder" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-control"
                      // value={email}  // Uppdaterat
                      // onChange={(e) => setEmail(e.target.value)}  // Uppdaterat
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
                        // value={password}  // Uppdaterat
                        // onChange={(e) => setPassword(e.target.value)}  // Uppdaterat
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
                  <div className="text2"> Do not have an account? </div>
                  <a className="sign-up" href="signup.html">
                    Sign Up
                  </a>
                </div>
                <br />
                <div className="social-icons">
                  <div className="MANERO">
                    <div className="FB">
                        <button id="FAB" className="social-button">
                            <img src="src\Assets\images\loginimages\fbicon.png" alt="FB" />
                        </button>

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
            </section> */}
      </section>  
    </div>
  );
}

export default LoginForm;
