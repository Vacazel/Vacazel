import React, { Component, useState } from 'react';

const AddBucketList = ({ addClickHandler, addPlaceHandler }) => {
  const [location, setLocation] = useState('');

  const locationHandler = (e) => {
    setLocation(e.target.value);
    console.log(location);
  }


  return (
    <div className='popup_bg'>
      <div className='add_place'>
        <div className='content_title'>Add to Bucket List</div>

        <div className='edit_form'>
          <form className='edit'>
            {/* <label>Place Name </label> */}
            <input
              id='bucket_place'
              type='text'
              name='bucket_place'
              placeholder='Add Your Bucket Place!'
              value={location}
              className='popup_input'
              onChange={locationHandler}
            />
          </form>
        </div>

        <div className='popup_Btns'>
          <button className='popup_closeBtn' onClick={addClickHandler}>
            CLOSE
          </button>
          <button className='popup_submitBtn' onClick={() => addPlaceHandler(location)}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBucketList;
