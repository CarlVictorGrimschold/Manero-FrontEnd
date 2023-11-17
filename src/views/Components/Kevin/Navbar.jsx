import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <footer>
    <Link to="/homepageview">
          <div>
              <a className="link">
                <i className="fa-solid fa-house"></i>
              </a>
          </div>
          
      </Link>
      <Link to ="/myprofile">
           <div>
                <a className="/myprofile" href="#">
                    <i className="fa-regular fa-circle-user">
                    </i>
                </a>
            </div>
      </Link>


    <div>
    <a class="link"><i class="fa-solid fa-magnifying-glass"></i></a>
    </div>
    <div>
    <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i>
      </a>
    </div>
    <div>
    <a class="link" href="#"><i class="fa-regular fa-heart"></i></a>
    </div>
    {/* <div>
    <a class="link" href="#"><i class="fa-regular fa-circle-user"></i></a>
    </div> */}
   </footer>
  );
}

export default Navbar;
