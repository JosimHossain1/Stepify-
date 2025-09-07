import React from 'react';
import HeroContent from '../components/Home/HeroArea/HeroContent';
import Categories from '../components/Home/Categories';
import { OurProducts } from '../components/Home/OurProducts';

const HomePage = () => {
  return (
    <div>
      <HeroContent />
      <Categories />
      <OurProducts />
    </div>
  );
};

export default HomePage;
