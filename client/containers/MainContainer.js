import React, { Component, useState } from 'react';
import Header from '../components/Header';
import WelcomeContainer from './WelcomeContainer';
import ContentContainer from './ContentContainer';

const MainContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isUser, setIsUser] = useState({ username: '', userID: '' });
  return (
    <div className='main_container'>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} isUser={isUser} />
      {isLogin ? (
        <ContentContainer setIsUser={setIsUser} />
      ) : (
        <WelcomeContainer />
      )}
    </div>
  );
};

export default MainContainer;
