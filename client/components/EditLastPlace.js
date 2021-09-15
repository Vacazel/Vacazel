import React, { Component, useState } from 'react';
import StartDatePicker from './StartDatePicker';
import EndDatePicker from './EndDatePicker';

const EditLastPlace = ({ editClickHandler, setlastPlace }) => {
  const [editPlace, setEditPlace] = useState({
    startDate: '',
    endDate: '',
    endDateString: '',
    place: '',
    budget: 0,
  });

  const dateFromTimestamp = (dateObject) => {
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return (
      dateObject.getFullYear() +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      (date < 10 ? '0' + date : date)
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
      endDateString: dateObject,
    });
  };

  const onSubmitHandler = () => {
    setlastPlace(editPlace);
    editClickHandler();
  };

  return (
    <div className='popup_bg'>
      <div className='edit_last_place'>
        <div className='content_title'>Fill Out</div>
        <div className=''>
          <form>
            <label>Place Name </label>
            <input
              id='last_place'
              type='text'
              name='lastplace'
              placeholder='Edit Last Place'
            />
            <input type='submit' value='Edit' />
          </form>
          <div></div>
        </div>

        <div>
          <form>
            <label>Budget </label>
            <input id='budget' type='text' name='budget' placeholder='Budget' />
            <input type='submit' value='Edit' />
          </form>
        </div>

        <div className='editDate'>
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
