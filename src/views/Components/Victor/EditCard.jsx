import React, { useState } from 'react';
import creditCardImage3 from '../../../Assets/images/loginimages/card2.png';
import { Link } from 'react-router-dom';
const EditCard = () => {
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expirationDate: ''
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Formatera expirationDate och övrig data för att matcha API-controller förväntningar
    const formattedDetails = {
      cardHolderName: cardDetails.cardHolderName,
      cardNumber: parseInt(cardDetails.cardNumber, 10),
      cvv: parseInt(cardDetails.cvv, 10),
      expirationDate: new Date(cardDetails.expirationDate).toISOString()
    };

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('https://localhost:7056/api/Card/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      //Hantera framgångsrikt svar här
      console.log('Card added successfully:', await response.json());
    } catch (error) {
      //Hantera fel här
      console.error('Error while adding card:', error);
    }
  };

  return (
    <section className="card-form">
      <section className="card-form-section">
        <Link to="/PaymentMethod"> 
          <i className="fas fa-chevron-left"></i>
        </Link>
        <h1 className="toptext">Edit card</h1>
        <div className="spacer"></div>
      </section>

      <section className="Cardholding">
        <div className="card-image">
          <img src={creditCardImage3} alt="Credit Card" />
        </div>
      </section>

      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="cardHolderName">Card Holder Name</label>
        <input
          type="text"
          id="cardHolderName"
          placeholder="Card Holder Name"
          value={cardDetails.cardHolderName}
          onChange={handleChange}
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="Card Number"
          value={cardDetails.cardNumber}
          onChange={handleChange}
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          placeholder="CVV"
          value={cardDetails.cvv}
          onChange={handleChange}
        />

        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          type="date"
          id="expirationDate"
          value={cardDetails.expirationDate}
          onChange={handleChange}
        />

        <button type="submit" className="standard-button">SAVE EDIT</button>
      </form>
    </section>
  );
};

export default EditCard;
