import React, { Component, useState } from 'react';
import Header from '../components/Header';
import WelcomeContainer from './WelcomeContainer';
import ContentContainer from './ContentContainer';

const MainContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='main_container'>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <ContentContainer /> : <WelcomeContainer />}
    </div>
  );
};

export default MainContainer;
