import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PromoCodeComponent() {
  const [promoCodes, setPromoCodes] = useState([]);
  const [promoCodeToDelete, setPromoCodeIdToDelete] = useState('');

  useEffect(() => {
    const fetchPromoCodes = async () => {
      try {
        const response = await fetch('https://localhost:7056/api/PromoCode/GETALL');
        if (!response.ok) {
          throw new Error('Failed to fetch promo codes');
        }
        const data = await response.json();
        setPromoCodes(data);
      } catch (error) {
        console.error('Error fetching promo codes:', error);
      }
    };

    fetchPromoCodes();
  }, []);

  const deletePromoCode = async () => {
    const response = await fetch(`https://localhost:7056/api/PromoCode/DELETE?id=${promoCodeToDelete}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setPromoCodes(promoCodes.filter(code => code.id !== promoCodeToDelete));
    } else {
      console.error('Failed to delete the promo code');
    }
  };

  return (
    <section className="promo-codes-container">
      <div className='master'>
        <Link to="/myprofile">
          <i className="fas fa-chevron-left"></i>
        </Link>
        <h1 className="toptext">Promocodes</h1>
        <div className="spacer"></div> 
      </div>
      
      <section className="promoCodeList">
        {promoCodes.map((promoCode) => (
          <div key={promoCode.id} className="promoCodeItem">
           <div>Id: {promoCode.id}</div> 
           <div>{promoCode.promoName}</div> 
           <div>{promoCode.salePercentage}% off</div> 
           <div> Valid until {promoCode.validity}</div>
           <div> --------------------------------------------</div>
          </div>
        ))}
      </section>

      <section className="KnappenHugo">
        <div>
          <Link to="/AddANewPromocode">
            <button type="button" className="standard-button">Add promocodes</button>
          </Link>
        </div>
        <div>
          <button onClick={deletePromoCode} type="button" className="standard-button">Delete promocodes</button> 
          <section className="PromoCodeDelete">
            <input 
              type="text"
              value={promoCodeToDelete}
              onChange={(e) => setPromoCodeIdToDelete(e.target.value)}
              placeholder="Promocode ID to Delete"
              className="inputField" 
            />
          </section>
        </div>
      </section>
    </section> 
  );
}

export default PromoCodeComponent;