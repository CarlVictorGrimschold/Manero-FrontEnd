import React from 'react';
import creditCardImage1 from '../../../Assets/images/loginimages/card1.png';
import creditCardImage2 from '../../../Assets/images/loginimages/card2.png';
import creditCardImage3 from '../../../Assets/images/loginimages/card3.png';



const PaymentMethod = () => {
  // Här skulle du hantera logik för att välja eller redigera betalningsmetoder

  return (
    <section className="containerPayment">
        <div className='master'>
          <button className="backButton">
              <i className="fas fa-chevron-left"></i>
          </button>
      <h1  className="toptext">Payment Metod </h1>
      <div className="spacer"></div> 
      
    </div>
      
    <section className="Cardholding">
       {/*  <button className="backButton">&lt;</button> */}
       {/* <h1>Payment method</h1> */}
        <div id="slider">
          <input type="radio" name="slider" id="slide1" defaultChecked />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
          <div id="slides">
            <div id="overflow">
              <div className="inner">
                {/* Bilderna borde ha alt-text för tillgänglighet */}
                <img src={creditCardImage1} alt="Credit Card1" />
                <img src={creditCardImage2} alt="Credit Card2" />
                <img src={creditCardImage3} alt="Credit Card3" />
              </div>
            </div>
          </div>
          <label htmlFor="slide1" className="slideLabel"></label>
          <label htmlFor="slide2" className="slideLabel"></label>
          <label htmlFor="slide3" className="slideLabel"></label>
         
        </div>
      </section>

      <ul className="paymentList">
        <li className="paymentItem">
          <span>Apple Pay
          <i id='checkpaymentmetod' className="fa-solid fa-check check-icon"></i> </span>
          <button className="editButton"><i className="fa-solid fa-pen"></i></button>
        </li>
        <li className="paymentItem">
          <span>Pay Pal
          <i className="fa-solid fa-check check-icon"></i> </span>
          <button className="editButton"><i className="fa-solid fa-pen"></i></button>
        </li>
        <li className="paymentItem">
          <span>Payoneer</span>
          <button className="addButton"><i className="fa-solid fa-plus"></i></button>
        </li>
      </ul>
    </section>
  );
}

export default PaymentMethod;