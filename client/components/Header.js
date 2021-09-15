import React, { Component, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import User from './User';

const Header = ({ isLogin, setIsLogin }) => {
  const [clickUser, setClickUser] = useState(false);

  const clickUserHandler = (e) => {
    e.stopPropagation();
    if (clickUser) return setClickUser(false);
    return setClickUser(true);
  };

  useEffect(() => {
    if (clickUser) {
      document.body.addEventListener('click', () => {
        setClickUser(false);
      });
    }
  }, [clickUser]);

  const clickLoginHandler = () => {
    setIsLogin(true);
  };

  return (
    <header className='header'>
      <div className='header_logo'>VACAZEL</div>
      <div className='header_icons'>
        {isLogin ? (
          <div className='header_user'>
            <div className='header_icon' onClick={clickUserHandler}>
              USER
            </div>
            {clickUser && <User setIsLogin={setIsLogin} />}
          </div>
        ) : (
          <button className='header_signin' onClick={clickLoginHandler}>
            SIGN IN
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
