import UserContext from "../../contexts/userContext";
import Navbar from "../../views/Components/Kevin/Navbar";
import MyProfile from "../partials/MyProfileForm";
function Myprofileview(){
    return(
        <div>
            
            <UserContext/>
            <Navbar/>
        
        </div>
    );
}
export default Myprofileview;