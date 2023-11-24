import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';



// function starrating(starRating) {
//   const stars = [];
//   for (let i = 0; i < 5; i++) {
//     stars.push(
//       <FontAwesomeIcon
//         key={i}
//         icon={i < starRating ? solidStar : regularStar}
//         className="star-icon"
//       />
//     );
//   }
//   return stars;
// }



const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    async function getProducts(tag) {
      try{
        const token = localStorage.getItem("token"); 
        const res = await fetch(`https://localhost:7056/api/${tag}`,{
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
       }
        );
        const data = await res.json();
        setProducts(data);


      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
      
    }

    getProducts("products");
  }, []);

  console.log('Products:', products); // Lägger till denna log för att inspektera värdet av products

  return (
    <div>
      
    <section className="product-collection">
    <div className="container">
      <div className='Featured-header'>
        <div className="title">Featured Products</div>
        <a className='View-All'>view all <i class="fa-solid fa-chevron-right"></i> </a>

      </div>
      <div className="collection-grid">
      {products.map(item => (
  <div className="collection-card" key={item.articleNumber}>
    <div className="card-content">
      <img src={item.imageLink} alt={item.name} /> 
      <div className="card-menu">
        <nav className="icons">
          <a className="link" href="#"><i className="fa-regular fa-heart"></i></a>
          <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a>
        </nav>
      </div>
    </div>
    <div className="card-body">
      <p className="title">{item.color} {item.name} </p>
      <div className="ranking">
       
      </div>
      <p className="price">{item.price} kr</p>
    </div>
  </div>
))}
      </div>
    </div>
  </section>
    </div>
);
}

export default FeaturedProducts;
