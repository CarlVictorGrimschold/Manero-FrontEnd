import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddANewPromocode = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // Uppdaterad state för att spegla strukturen i det önskade JSON-objektet
  const [promocodeDetails, setPromocodeDetails] = useState({
    promoName: '',
    salePercentage: 0,
    validity: ''
  });

  // Hantera förändringar i formulärets input-fält
  const handleChange = (e) => {
    setPromocodeDetails({ ...promocodeDetails, [e.target.name]: e.target.value });
  };

  // Hantera inskickning av formuläret
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formaterar datumen för att matcha API-förväntningarna
    const formattedDetails = {
      promoName: promocodeDetails.promoName,
      salePercentage: parseInt(promocodeDetails.salePercentage, 10),
      validity: new Date(promocodeDetails.validity).toISOString()
    };

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('https://localhost:7056/api/PromoCode/CREATE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedDetails),
      });

      if (response.status === 201) {
        console.log('Created successfully!');
        setSuccessMessage('Promo added successfully!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to save promo!');
        console.log('Error: ' + response.status);
      }

      console.log('Promocode added successfully:', await response.json());
    } catch (error) {
      console.error('Error while adding promocode:', error);
    }
  };

  return (
    <section className="card-form">
      <div className="card-form-section">
        <Link to="/PromoCode"> 
            <i className="fas fa-chevron-left"></i>
        </Link>
        <h1 className="toptext">Add a new Promocode</h1>
        <div className="spacer"></div>
      </div>
      {/* Övrig kod för layout och design */}
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="promoName">Promocode Name</label>
        <input
          type="text"
          name="promoName"
          placeholder="Promocode Name"
          value={promocodeDetails.promoName}
          onChange={handleChange}
        />

        <label htmlFor="salePercentage">Sale Percentage</label>
        <input
          type="number"
          name="salePercentage"
          placeholder="Sale Percentage"
          value={promocodeDetails.salePercentage}
          onChange={handleChange}
        />

        <label htmlFor="validity">Validity Date</label>
        <input
          type="date"
          name="validity"
          value={promocodeDetails.validity}
          onChange={handleChange}
        />

        <button type="submit" className="standard-button">Save Promocode</button>
        {successMessage && (<div className="success-message">{successMessage}</div>)}
        {errorMessage && (<div className="error-message">{errorMessage}</div>)}
      </form>
    </section>
  );
};

export default AddANewPromocode;