import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import creditCardImage1 from '../../../Assets/images/loginimages/card1.png';
import creditCardImage2 from '../../../Assets/images/loginimages/card2.png';
import creditCardImage3 from '../../../Assets/images/loginimages/card3.png';



const PaymentMethod = () => {
  const [creditCards, setCreditCard] = useState([]);
  const [cardIdToDelete, setCardIdToDelete] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCreditCards = async () => {
      try {
        const response = await fetch('https://localhost:7056/api/Card/GetAllUserCards',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ cardId: creditCards }), // Använd cardIdToDelete från state
        });
        if (!response.ok) {
          throw new Error('Failed to fetch credit cards!');
        }
        const data = await response.json();
        setCreditCard(data);
      } catch (error) {
        console.error('Error fetching credit cards:', error);
      }
    };

    fetchCreditCards();
  }, []);

  const token = localStorage.getItem('token');

  const deletecard = async () => {
    const api = 'https://localhost:7056/api/Card/DELETE'; // Ersätt med din faktiska API-endpoint
    try {
      const response = await fetch(api, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ cardId: cardIdToDelete }), // Använd cardIdToDelete från state
      });

      if (response.status === 201) {
        console.log('Changes saved successfully!');
        setSuccessMessage('Card deleted successfully!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to delete card!');
        console.log('Error: ' + response.status);
      }

      console.log('Card deleted successfully:', await response.json());
    } catch (error) {
      console.error('Error while deleting card:', error);
    }
  };

  return (
    <section className="containerPayment">
      <div className='master'>
        <Link to="/myprofile"> 
          <i className="fas fa-chevron-left"></i>
        </Link>
        <h1 className="toptext">Payment Method</h1>
        <div className="spacer"></div> 
      </div>
      
      <section className="Cardholding">
        {creditCards.map((creditCard) => (
            <div key={creditCard.cardId} className="creditCardItem">
            <div>Id: {cardCard.cardId}</div> 
            <div>{cardCard.CardHolderName}</div> 
            <div>{creditCard.CVV} off</div> 
            <div> Valid until {creditCard.expirationDate}</div>
            <div> --------------------------------------------</div>
            </div>
          ))}
        {/* <div id="slider">
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
        </div> */}
      </section>

      <section className = "KnappenHugo" >
      <div>
        
        <Link to = "/AddANewCard">
          <button type="button" className="standard-button">Add card</button>
        </Link>
        <Link to = "/EditCard">
          <button type="button" className="standard-button">Edit card</button>
        </Link>
       
      </div>

  
      
      <div>
       
        <button onClick={deletecard} type="button" className="standard-button">Remove card</button> 
        {successMessage && (<div className="success-message">{successMessage}</div>)}
        {errorMessage && (<div className="error-message">{errorMessage}</div>)}
      </div>
      </section>
      <input 
        type="text"
        value={cardIdToDelete} 
        onChange={(e) => setCardIdToDelete(e.target.value)} 
        placeholder="Enter Card ID to Delete"
        className="inputField" 
      />
     

    </section>



  );
}

export default PaymentMethod;


 