import React, { Component } from 'react';

const WelcomeContainer = () => {
  return (
    <div className='welcome_container'>
      <div className='main_banner'>
        <p className='main_title'> WELCOME TO VACAZEL</p>
      </div>

      <div className='sub_banner'>
        <p className='sub_title'>Inspiration for Future Getaways</p>
        <div className='sub_banner_pic'>
          <img
            src='https://via.placeholder.com/250x275'
            className='sub_pic'
          ></img>
          <img
            src='https://via.placeholder.com/250x275'
            className='sub_pic'
          ></img>
          <img
            src='https://via.placeholder.com/250x275'
            className='sub_pic'
          ></img>
          <img
            src='https://via.placeholder.com/250x275'
            className='sub_pic'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
