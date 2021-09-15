import React, { Component, useState } from 'react';

const AddBucketList = ({ addClickHandler }) => {
  return (
    <div className='popup_bg'>
      <div className='add_place'>
        <div className='content_title'>Fill Out</div>
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
