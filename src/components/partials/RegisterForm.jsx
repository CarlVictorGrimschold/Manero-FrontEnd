import '../../contexts/AuthSignup';
import '../../views/css/style.min.css';

function RegisterForm(){

    return (
        <div>
          <section className="signup1">
            <div className="goblack">
              <a href="/loginview" className="icon-Back" title="Tillbaka till inloggning">
                <i className="fa fa-angle-left"></i>
              </a>
            </div>
            <div>
              <h4>Sign Up</h4>
            </div>
            <div></div>
          </section>
    
          <div className="strek">|</div>
    
          <section className="signup-section">
            <h1 className="signup">Sign Up</h1>
          </section>
              {/* <div className="test">
                test
                <a href="/accountcreated" title='going to accountcreated'>test</a>
              </div> */}
          
        </div>
      );
    }
    export default RegisterForm;
    
              
    