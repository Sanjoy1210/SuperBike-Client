import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <Reviews />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;