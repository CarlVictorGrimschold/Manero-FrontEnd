import React, { useState } from 'react';
import creditCardImage3 from '../../../Assets/images/loginimages/card2.png';
import { Link } from 'react-router-dom';
const EditCard = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
      const response = await fetch('https://localhost:7056/api/Card/CREATE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedDetails),
      });

      if (response.status === 201) {
        console.log('Changes saved successfully!');
        setSuccessMessage('Card changed successfully!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to change card!');
        console.log('Error: ' + response.status);
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
        {successMessage && (<div className="success-message">{successMessage}</div>)}
        {errorMessage && (<div className="error-message">{errorMessage}</div>)}
      </form>
    </section>
  );
};

export default EditCard;
