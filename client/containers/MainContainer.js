import React, { Component, useState } from 'react';
import Header from '../components/Header';
import WelcomeContainer from './WelcomeContainer';
import ContentContainer from './ContentContainer';

const MainContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='main_container'>
      <Header isLogin={isLogin} />
      {isLogin ? <ContentContainer /> : <WelcomeContainer />}
    </div>
  );
};

export default MainContainer;
