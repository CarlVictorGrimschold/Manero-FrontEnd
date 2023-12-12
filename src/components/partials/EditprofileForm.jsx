//Editprofileform.jsx fil

import "../../views/css/style.min.css";

function EditProfileForm(){
    return(
        <div className="EDITE-PROFILE">
            <section className="Edit-Profile">
                <div className="goblack">
                <a href="/myprofile" className="icon-Back" title="Tillbaka till inloggning">
                    <i className="fa fa-angle-left"></i>
                </a>
                </div>
                <div>
                 <h4>Edit Profile</h4>
                </div>
                <div></div>
            </section>
                <div className="strek">|</div>
                {/* user edit img */}
            {/* <section className="circles">

                <div className="bigcircle">
                    <div className="mediumcircle">
                        <div className="smallcircle">
                            <div className="camera">
                                <a href="/editeprofileview">
                                <i className="fa-thin fa-camera"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
export default EditProfileForm;
