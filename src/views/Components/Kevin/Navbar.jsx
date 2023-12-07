import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <footer>
    <Link to="/homepageview">
          <div>
              <div className="link">
                <i className="fa-solid fa-house"></i>
              </div>
          </div>
          
      </Link>
      <Link to ="/myprofile">
           <div>
                <div className="link" href="#">
                    <i className="fa-regular fa-circle-user">
                    </i>
                </div>
            </div>
      </Link>
      <Link to ="/Categoryview">
           <div>
                <div className="link">
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
      </Link>


    <div>
    <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i>
      </a>
    </div>
    <div>
    <a className="link" href="#"><i className="fa-regular fa-heart"></i></a>
    </div>
    {/* <div>
    <a class="link" href="#"><i class="fa-regular fa-circle-user"></i></a>
    </div> */}
   </footer>
  );
}

export default Navbar;
