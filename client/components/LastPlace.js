import React, { Component, useState } from 'react';
import EditLastPlace from './EditLastPlace';

const LastPlace = ({ lastPlace, setUpdatePlace, setLastPlace }) => {
  const [editClick, setEditClick] = useState(false);

  const editClickHandler = () => {
    if (!editClick) return setEditClick(true);
    return setEditClick(false);
  };

  const splitPrice = (num) => {
    const num2 = Number(num);
    return num2.toLocaleString('en-US');
  };

  return (
    <div className='last_place_section'>
      <div>
        <div className='content_title'>Last place you visited</div>
        <div className='last_details'>
          <img className='last_picture' src={lastPlace.image} />
          <ul>
            <li className='last_list small_font'>
              {`${lastPlace.startDate} ~ ${lastPlace.endDate}`}
            </li>
            <li className='last_list last_place'>{lastPlace.place}</li>
            <li className='last_list last_budget'>
              <label className='small_font'>budget : </label>
              <span className='small_font'>{`$ ${splitPrice(
                lastPlace.budget
              )}`}</span>
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
          lastPlace={lastPlace}
          setLastPlace={setLastPlace}
          setUpdatePlace={setUpdatePlace}
          editClickHandler={editClickHandler}
        />
      )}
    </div>
  );
};

export default LastPlace;
