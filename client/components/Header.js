import React, { Component, useState } from 'react';
import User from './User';

const Header = ({ isLogin }) => {
  const [clickUser, setClickUser] = useState(false);

  const clickUserHandler = () => {
    if (clickUser) return setClickUser(false);
    return setClickUser(true);
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
            {clickUser && <User />}
          </div>
        ) : (
          <button className='header_signin'>SIGN IN</button>
        )}
      </div>
    </header>
  );
};

export default Header;
