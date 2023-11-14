import React from 'react';
import creditCardImage3 from '../../../Assets/images/loginimages/card3.png';



const AddANewCard = () => {
  return (
    <section className="card-form">
      <section className="card-form-section">

        <button className="back-button">{"<"}</button>

        <h1 className="toptext"> Add a new card</h1>
        <div className="spacer"></div> 
      
     




      </section>
      <section className="Cardholding">
        <div className="card-image">
        <img src={creditCardImage3} alt="Credit Card" />


        </div>
      
      </section>
      
      
      <div className="card-display">
        <div className="card-image">
          {/* Card image or SVG can go here */}
        </div>
      </div>
      
      <form className="input-form">
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" placeholder="Name" />
        
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9123 0000" />
        
        <div className="expiry-cvv">
          <div>
            <label htmlFor="expiry">MM/YY</label>
            <input type="text" id="expiry" placeholder="MM/YY" />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="CVV" />
          </div>
        </div>
        
        <button type="submit" className="standard-button">SAVE CARD</button>
      </form>
    </section>
  );
};

export default AddANewCard;