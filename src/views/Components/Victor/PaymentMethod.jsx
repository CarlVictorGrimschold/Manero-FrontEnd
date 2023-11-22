import React, { useState } from 'react';
import creditCardImage1 from '../../../Assets/images/loginimages/card1.png';
import creditCardImage2 from '../../../Assets/images/loginimages/card2.png';
import creditCardImage3 from '../../../Assets/images/loginimages/card3.png';

const PaymentMethod = () => {
  const [cardIdToDelete, setCardIdToDelete] = useState('');

  const token = localStorage.getItem('token');

  const deletecard = async () => {
    const api = 'https://localhost:7056/api/Card/delete'; // Ersätt med din faktiska API-endpoint
    try {
      const response = await fetch(api, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ cardId: cardIdToDelete }), // Använd cardIdToDelete från state
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Card deleted successfully:', await response.json());
    } catch (error) {
      console.error('Error while deleting card:', error);
    }
  };

  return (
    <section className="containerPayment">
      <div className='master'>
        <button className="backButton">
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="toptext">Payment Method</h1>
        <div className="spacer"></div> 
      </div>
      
      <section className="Cardholding">
        <div id="slider">
          <input type="radio" name="slider" id="slide1" defaultChecked />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
          <div id="slides">
            <div id="overflow">
              <div className="inner">
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
        {/* Betalningsmetoder listan */}
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
      
      {/* Input för att ange ID för kortet som ska raderas */}
      <input 
        type="text" 
        value={cardIdToDelete} 
        onChange={(e) => setCardIdToDelete(e.target.value)} 
        placeholder="Enter Card ID to Delete"
        className="inputField" 
      />
      <button onClick={deletecard} type="button" className="standard-button">DELETE CARD</button> 
    </section>
  );
}

export default PaymentMethod;


 