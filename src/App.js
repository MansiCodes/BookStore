import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Categories from './components/Categories';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ImageSlider />
      <Categories />
      <Recommendations />
      <Footer />
    </AppContainer>
  );
};

export default App;
