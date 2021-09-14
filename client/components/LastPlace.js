import React, { Component } from 'react';

const LastPlace = () => {
  return (
    <div className='last_place'>
      <div>
        <div className='content_title'>Last place you visited</div>
        <div className='last_details'>
          <img
            className='last_picture'
            src='../client/img/flower-crown-eevee-guide-pokemon-go.jpeg'
          />
          <ul>
            <li className='last_list'>
              <label className='last_label'>Location : </label>
              <span className='last_data'>Paris</span>
            </li>
            <li className='last_list'>
              <label className='last_label'>Date : </label>
              <span className='last_data'>Aug 12th 2021- Aug 20th 2021</span>
            </li>
            <li className='last_list'>
              <label className='last_label'>budget : </label>
              <span className='last_data'>$ 2,000</span>
            </li>
          </ul>
        </div>
        <div className='last_edit'>
          Have you been to recent vacation? Please update it{' '}
          <button className='last_editbtn'>here</button>!
        </div>
      </div>
    </div>
  );
};

export default LastPlace;
