// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // En funktionell komponent för att visa en enskild promo kod
// const PromoCode = ({ company, discount, validity }) => {
//   return (
//     <div className="promo-code">
//       <div className="company-name">{company}</div>
//       <div className="discount">{discount} off</div>
//       <div className="validity">Valid until {validity}</div>
//     </div>
//   );
// };

// // Huvudkomponenten som renderar alla promo koder och ger funktionalitet för att lägga till, redigera, och radera promo koder
// function PromoCodeComponent() {
//   const [promoCodes, setPromoCodes] = useState([]);
//   const [newPromoCode, setNewPromoCode] = useState('');
//   const [cardIdToDelete, setCardIdToDelete] = useState('');

//   const deletecard = () => {
//     // Logiken för att ta bort en promo kod
//   };

//   return (
    
//     <>
//       <section className="KnappenHugo2">
//       <Link to="/myprofile"> 
//           <i className="fas fa-chevron-left"></i>
//         </Link>
//         <div>
//           <Link to="/AddANewANewPromocode">
//             <button type="button" className="standard-button">Add promocodes</button>
//           </Link>
          
//         </div>
//         <div>
//         <button onClick={deletecard} type="button" className="standard-button">Delete promocodes</button> 
//           <section className = "PromoCodeDelete">
//           <input 
//             type="text"
//             value={cardIdToDelete} 
//             onChange={(e) => setCardIdToDelete(e.target.value)} 
//             placeholder="Promocode ID to Delete"
//             className="inputField" 
//           />
//           </section>
          
//         </div>
//       </section>
      
//       {/* Rendera alla promo koder här */}
//       {promoCodes.map((code, index) => (
//         <PromoCode
//           key={index}
//           company={code.company}
//           discount={code.discount}
//           validity={code.validity}
//         />
//       ))}
//     </>
//   );
// }

// export default PromoCodeComponent;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PromoCode = ({ company, discount, validity }) => {
  return (
    <div className="promo-code">
      <div className="company-name">{company}</div>
      <div className="discount">{discount}% off</div> {/* Antog att "discount" är en procent */}
      <div className="validity">Valid until {validity}</div>
    </div>
  );
};

function PromoCodeComponent() {
  const [promoCodes, setPromoCodes] = useState([]);
  const [promoCodeToDelete, setPromoCodeIdToDelete] = useState('');

  const deletePromoCode = async () => {
    // Ersätt med ditt faktiska API-anrop för att radera promo koden
    const response = await fetch(`https://localhost:7056/api/PromoCode/DELETE?id=${promoCodeToDelete}`, {
      method: 'DELETE',
      // Här ska du lägga till headers om din API kräver det, till exempel en Authorization header
    });

    if (response.ok) {
      // Uppdatera state för att reflektera borttagningen
      setPromoCodes(promoCodes.filter(code => code.id !== promoCodeToDelete));
    } else {
      // Hantera fel, till exempel genom att visa ett meddelande för användaren
      console.error('Failed to delete the promo code');
    }
  };

  // ...resten av din komponent...

  return (
    <>
      <section className="KnappenHugo2">
        <Link to="/myprofile"> 
          <i className="fas fa-chevron-left"></i>
        </Link>
        <div>
          <Link to="/AddANewANewPromocode">
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
      
      {promoCodes.length > 0 ? (
        promoCodes.map((code) => (
          <PromoCode
            key={code.id}
            company={code.company}
            discount={code.discount}
            validity={code.validity}
          />
        ))
      ) : (
        <div>No Promo Codes Available</div>
      )}
    </>
  );
}

export default PromoCodeComponent;