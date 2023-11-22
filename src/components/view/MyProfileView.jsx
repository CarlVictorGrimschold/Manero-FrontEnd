import UserContext from "../../contexts/userContext";
import MyProfile from "../partials/MyProfileForm";
function Myprofileview(){
    return(
        <div>
            <MyProfile/>
            <UserContext/>
        </div>
    );
}
export default Myprofileview;