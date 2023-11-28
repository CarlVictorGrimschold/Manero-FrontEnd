import React, { useState } from 'react';

const Header = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <header>
      <div className="Hbar">
        <a className="link" onClick={toggleOverlay}>
          <i className="fa-regular fa-bars"></i>
        </a>
      </div>
      <div className="Logotype">
        <a className="logo" href="index.html">MANERO</a>
      </div>
      <div className="Shopping-cart">
        <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a>
      </div>

      {isOverlayVisible && (
        <div className="overlay">
          <button onClick={toggleOverlay}>Stäng</button>
        </div>
      )}
      <div
        className={`overlay-background ${isOverlayVisible ? 'visible' : ''}`}
        onClick={toggleOverlay}
      >
        <div className='contact-big-box'>
          <div className='Contact-header'>
            <h2>Contact us</h2>
            </div>
          <div className='Contact-adress-box'>
          <i class="fa-solid fa-location-dot"></i>
            <p>27 Division St, New york,</p>
            <p>NY 10002, USA</p>
          </div>
          <div className='Contact-email-box'>
          <i class="fa-solid fa-envelope"></i>
            <p>manerosale@gmail.com</p>
            <p>manerosupport@gmail.com</p>
          </div>
          <div className='Contact-phone-box'>
          <i class="fa-solid fa-phone"></i>
            <p>+17 123456789</p>
            <p>+17 987654321</p>
          </div>
          <div className='Contact-track-box'>
            <p>Track your order</p>
            <div class="contact-button">
              <div class="input-group">
              <label class="input-group__label" for="myInput">
                Oder number</label>
              <input type="text" id="myInput" class="input-group__input" value="10002" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
