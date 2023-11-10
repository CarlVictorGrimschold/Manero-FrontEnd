 import Header from '../../views/Components/Kevin/Header';
 import Navbar from '../../views/Components/Kevin/Navbar';
import Showcase from '../../views/Components/Kevin/Showcase';
import FeaturedProducts from '../../views/Components/Kevin/FeaturedProducts';
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