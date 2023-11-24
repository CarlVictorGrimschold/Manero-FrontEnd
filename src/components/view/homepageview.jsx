 import Header from '../../views/Components/Kevin/Header';
 import Navbar from '../../views/Components/Kevin/Navbar';
import Showcase from '../../views/Components/Kevin/Showcase';
import FeaturedProducts from '../../views/Components/Kevin/FeaturedProducts';
import Showcase2 from '../../views/Components/Kevin/Showcase2';
function Homepageview() {
    return(
        <div className='HomePageview'>
            <Header/>
            <Showcase/>
            <FeaturedProducts/>
            <Showcase2/>
            <Navbar/>
        </div>
    );
}
export default Homepageview;