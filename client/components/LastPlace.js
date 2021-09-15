import React, { Component, useState } from 'react';
import EditLastPlace from './EditLastPlace';

const LastPlace = ({ lastPlace, setUpdatePlace }) => {
  const [editClick, setEditClick] = useState(false);

  const editClickHandler = () => {
    if (!editClick) return setEditClick(true);
    return setEditClick(false);
  };

  return (
    <div className='last_place_section'>
      <div>
        <div className='content_title'>Last place you visited</div>
        <div className='last_details'>
          <img className='last_picture' src='../client/img/Paris.jpeg' />
          <ul>
            <li className='last_list small_font'>
              {`${lastPlace.startDate} ~ ${lastPlace.endDate}`}
            </li>
            <li className='last_list last_place'>{lastPlace.place}</li>
            <li className='last_list last_budget'>
              <label className='small_font'>budget : </label>
              <span className='small_font'>{`$ ${lastPlace.budget}`}</span>
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
          setUpdatePlace={setUpdatePlace}
          editClickHandler={editClickHandler}
        />
      )}
    </div>
  );
};

export default LastPlace;
