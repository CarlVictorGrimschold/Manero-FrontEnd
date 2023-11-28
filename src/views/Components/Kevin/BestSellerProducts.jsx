import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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



const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    async function getProducts(tag) {
      try{
        const token = localStorage.getItem("token"); 
        const res = await fetch(`https://localhost:7056/api/products/take?take=4&category=BestSeller`,{
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
        <div className="title">Best Sellers</div>
        <Link to='/ViewAllBestSeller' className='View-All'>
        view all <i className="fa-solid fa-chevron-right"></i>
      </Link>
      </div>
      <div className="collection-grid">
        {products.map(item => (
          item.category === "BestSeller" && (
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
                <p className="title">{item.name}</p>
                <p className="color">{item.color[0].color}</p>
                <div className="ranking">

                </div>
                <p className="price">{item.price} kr</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  </section>
</div>

  
);
}

export default BestSellerProducts;



 {/* {item.color.map(colorItem => (
                    <p key={colorItem.colorId} className="title">{colorItem.color} {item.name} </p>
                  ))}
                  {item.size.map(sizeItem => (
                    <p key={sizeItem.sizeId} className="title">{sizeItem.size} {item.name} </p>
                  ))} */}