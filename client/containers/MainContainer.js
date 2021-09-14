import React, { Component, useState } from 'react';
import Header from '../components/Header';
import LoginContainer from './LoginContainer';
import ContentContainer from './ContentContainer';

const MainContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='main_container'>
      <Header isLogin={isLogin} />
      {isLogin ? <ContentContainer /> : <LoginContainer />}
    </div>
  );
};

export default MainContainer;
