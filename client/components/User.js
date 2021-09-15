import React, { Component } from 'react';

const User = ({ setIsLogin }) => {
  const clickSignout = () => {
    setIsLogin(false);
  };
  return (
    <div className='user_info'>
      <div className='user_signout' onClick={clickSignout}>
        SIGN OUT
      </div>
    </div>
  );
};

export default User;
