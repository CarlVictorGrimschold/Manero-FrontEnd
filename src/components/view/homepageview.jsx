
import React, { useState } from 'react';
import Header from '../../views/Components/Kevin/Header';
import Showcase from '../../views/Components/Kevin/Showcase';
import FeaturedProducts from '../../views/Components/Kevin/FeaturedProducts';
import Showcase2 from '../../views/Components/Kevin/Showcase2';
import BestSellerProducts from '../../views/Components/Kevin/BestSellerProducts';
import Navbar from '../../views/Components/Kevin/Navbar';

function Homepageview() {
 
  return (
    <div className='HomePageview'>
      <Header />
      <Showcase />
      <FeaturedProducts />
      <Showcase2 />
      <BestSellerProducts />
      <Navbar />
    </div>
  );
}

export default Homepageview;
