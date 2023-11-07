import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="Hbar">
      <   a className="link">
            <i className="fa-regular fa-bars"></i>
          </a>
      </div>
      <div className="Logotype">
        <a className="logo" href="index.html">MANERO</a>
        </div>
      <div className="Shopping-cart">
      <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i>
      </a>
      </div>
    </header>
  );
}

export default Header;
