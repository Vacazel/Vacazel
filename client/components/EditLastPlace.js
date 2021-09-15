import React, { Component, useState } from 'react';
import StartDatePicker from './StartDatePicker';
import EndDatePicker from './EndDatePicker';
import LastPlace from './LastPlace';

const EditLastPlace = ({ editClickHandler, setUpdatePlace }) => {
  const [editPlace, setEditPlace] = useState({
    startDate: '',
    endDate: '',
    place: '',
    budget: 0,
  });

  const dateFromTimestamp = (dateObject) => {
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return (
      (month < 10 ? '0' + month : month) +
      '/' +
      (date < 10 ? '0' + date : date) +
      '/' +
      dateObject.getFullYear()
    );
  };

  const startDayHandler = (timestamp) => {
    let dateObject = new Date(timestamp);
    setEditPlace({
      ...editPlace,
      startDate: dateFromTimestamp(dateObject),
    });
  };

  const endDayHandler = (timestamp) => {
    let dateObject = new Date(timestamp);
    setEditPlace({
      ...editPlace,
      endDate: dateFromTimestamp(dateObject),
    });
  };

  // function to handle changing budget
  const handlePlaceInputChange = (event) => {
    setEditPlace((editPlace) => ({
      ...editPlace,
      place: event.target.value,
    }));
  };

  // function to handle changing budget
  const handleBudgetInputChange = (event) => {
    setEditPlace((editPlace) => ({
      ...editPlace,
      budget: event.target.value,
    }));
  };

  const onSubmitHandler = () => {
    setUpdatePlace(editPlace.endDate);
    editClickHandler();
  };

  return (
    <div className='popup_bg'>
      <div className='edit_last_place'>
        <div className='content_title'>Edit Last Travel Details</div>

        <div className='edit_form'>
          <form className='edit'>
            {/* <label>Place Name </label> */}
            <input
              id='last_place'
              type='text'
              name='lastplace'
              placeholder='Edit Last Place'
              onChange={handlePlaceInputChange}
            />
            <input className='edit_button' type='submit' value='Edit' />
          </form>
        </div>

        <div className='edit_form'>
          <form className='edit'>
            {/* <label>Budget </label> */}
            <input
              id='budget'
              type='number'
              name='budget'
              placeholder='Budget'
              onChange={handleBudgetInputChange}
            />
            <input className='edit_button' type='submit' value='Edit' />
          </form>
        </div>

        <div className='edit_date'>
          <p>Start Date</p>
          <StartDatePicker startDayHandler={startDayHandler} />
          <p>End Date</p>
          <EndDatePicker endDayHandler={endDayHandler} />
        </div>

        <div className='popup_Btns'>
          <button className='popup_closeBtn' onClick={editClickHandler}>
            CLOSE
          </button>
          <button className='popup_submitBtn' onClick={onSubmitHandler}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLastPlace;
