import React, { Component, useState, useEffect } from 'react';

const WelcomeImage = ({id, image, name}) => {

  return(
    <div className='sub_banner_pic'>
      
      <div>
        <img src={image} className='sub_pic'/>
        <p className='image_text'>{name}</p>
        </div>
    </div>
  )
}

export default WelcomeImage;