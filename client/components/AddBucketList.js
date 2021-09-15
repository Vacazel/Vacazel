import React, { Component, useState } from 'react';

const AddBucketList = ({ addClickHandler }) => {
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
              placeholder='Add Bucket List Item'
            />
            <input className='edit_button' type='submit' value='Add' />
          </form>
        </div>

        <div className='popup_Btns'>
          <button className='popup_closeBtn' onClick={addClickHandler}>
            CLOSE
          </button>
          <button className='popup_submitBtn' onClick={addClickHandler}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBucketList;
