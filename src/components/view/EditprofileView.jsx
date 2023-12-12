//Editprofileview.jsx fil

import EditprofileContext from "../../contexts/Editprofilecontext";
import EditProfileForm from "../partials/Editprofileform";
function EditProfileView (){
    return(
        <div>
            <EditProfileForm/>
            <EditprofileContext/>
        </div>
    );
}
export default EditProfileView;

