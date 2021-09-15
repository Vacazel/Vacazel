import React, { Component, useState, useEffect } from 'react';
import EditLastPlace from './EditLastPlace';

const LastPlace = () => {
  const [editClick, setEditClick] = useState(false);
  const [lastPlace, setlastPlace] = useState({
    startDate: '',
    endDate: '',
    endDateString: '',
    place: '',
    budget: 0,
  });

  const formatDate = (date) => {
    const result = new Date();
  };

  const editClickHandler = () => {
    if (!editClick) return setEditClick(true);
    return setEditClick(false);
  };

  return (
    <div className='last_place_section'>
      <div>
        <div className='content_title'>Last place you visited</div>
        <div className='last_details'>
          <img
            className='last_picture'
            src='../client/img/flower-crown-eevee-guide-pokemon-go.jpeg'
          />
          <ul>
            <li className='last_list small_font'>
              Aug 12th 2021- Aug 20th 2021
            </li>
            <li className='last_list last_place'>Paris</li>
            <li className='last_list last_budget'>
              <label className='small_font'>budget : </label>
              <span className='small_font'>$ 2,000</span>
            </li>
            <div className='last_edit'>
              Have you been to recent vacation? Please update it {''}
              <button className='last_editbtn' onClick={editClickHandler}>
                here
              </button>
              !
            </div>
          </ul>
        </div>
      </div>
      {editClick && (
        <EditLastPlace
          setlastPlace={setlastPlace}
          editClickHandler={editClickHandler}
        />
      )}
    </div>
  );
};

export default LastPlace;
