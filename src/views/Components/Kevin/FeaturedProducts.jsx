import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';



function starrating(starRating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i < starRating ? solidStar : regularStar}
        className="star-icon"
      />
    );
  }
  return stars;
}



const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts(tag) {
      const res = await fetch(`https://kyh-net22.azurewebsites.net/api/products/${tag}`);
      const data = await res.json();
      setProducts(data);
    }

    getProducts("featured");
  }, []);
  return (
    <section className="product-collection">
    <div className="container">
      <div className="title">Featured Products</div>
      <div className="collection-grid">
        {products.map(item => (
          <div className="collection-card" key={item.id}>
            <div className="card-content">
              <img src={item.imageUrl} alt={item.name} />
              <div className="card-menu">
                <nav className="icons">
                  <a className="link" href="#"><i className="fa-regular fa-heart"></i></a>
                  <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a>
                </nav>
                <a className="btn-theme" href="#">QUICK VIEW</a>
              </div>
            </div>
            <div className="card-body">
              <p className="category">{item.category}</p>
              <p className="title">{item.color} {item.name} </p>
              <div className="ranking">
                {starrating(item.starRating)}
              </div>
              <p className="price">{item.price} kr</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default FeaturedProducts;
