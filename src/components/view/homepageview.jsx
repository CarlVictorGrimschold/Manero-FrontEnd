 import Header from '../../views/Components/Kevin/Header';
 import Navbar from '../../views/Components/Kevin/Navbar';
import Showcase from '../../views/Components/Kevin/Showcase';
import FeaturedProducts from '../../views/Components/Kevin/FeaturedProducts';
import PromoCodes from '../../views/Components/Victor/PromoCode';
import AddANewANewPromocode from '../../views/Components/Victor/AddANewPromocode';
function Homepageview() {
    return(
        <div>
            <Header/>
            <Showcase/>
            <FeaturedProducts/>
            
            <Navbar/>
        </div>
    );
}
export default Homepageview;