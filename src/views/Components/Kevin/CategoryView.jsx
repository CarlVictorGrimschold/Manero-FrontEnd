import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';

const CategoryView = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function getProducts() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`https://localhost:7056/api/products`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getProducts();
  }, []);

  const sortItems = (criteria) => {
    setSortBy(criteria);
  };

  const sortedProducts = [...products];

  if (sortBy === 'price') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'name') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const filteredProducts = sortedProducts.filter(item => (
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <div>
      <Header/>
      <section className="product-collection">
        <div className="container">
          <div className='Featured-header-viewAll'>
            <div className="titleviewall">Search</div>
          </div>
          <div className='viewall-organice-box'>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select className='Sorting-by' onChange={(e) => sortItems(e.target.value)}>
              <option value="">Sorting By</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div className="collection-grid">
            {filteredProducts.map(item => (
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
                    {/* Ranking-komponenten här */}
                  </div>
                  <p className="price">{item.price} kr</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Navbar />
    </div>
  );
}

export default CategoryView;
