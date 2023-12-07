import MyAddressContext from "../../contexts/MyAddressContext";
import MyAddressForm from "../partials/MyAddressForm";

function MyAddressView(){
    return(
        <div>
            <MyAddressForm/>
            <MyAddressContext/>
        </div>
    );
}
export default MyAddressView;
