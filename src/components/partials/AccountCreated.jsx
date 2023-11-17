//import '../../views/css/scss/section/_Accountcreated.scss'
import '../../views/css/style.min.css';

function AccountCreated (){
    return(
        <div className="AccountCreated">
             <div className="MANERO">
                <img src="src\Assets\images\loginimages\headerlogo.png" alt="MANERO" />
                </div>
                <br />
                <div className="MANERO2">
                <img src="src\Assets\images\loginimages\userimg.png" alt="KEYimage" />
                </div>
                <div className="strek">
                |
                </div>
                <div className="passwordmessage">Account Created!</div>
                <div className="passwordmessage"></div>
                <div className="txt1">Your account has been created</div>
                <div className="txt1">Successfully.</div>
                {/* <form action="index.html" method="GET"></form> */}
                <br></br>
                <div className="sendbtn">                    
                    <a className="hompageview" href="/homepageview">SHOP NOW</a>
                </div>
                <br/>
                <footer1 className="footer1"></footer1>
                {/* <button type="submit" className="send-button">
                        </button> */}
                        {/* SHOP NOW */}
                
        </div>
    );
}
export default AccountCreated;