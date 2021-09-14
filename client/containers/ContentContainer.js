import React, { Component } from 'react';
import LastPlace from '../components/LastPlace';
import BucketList from '../components/BucketList';

const ContentContainer = () => {
  return (
    <div className='content_container'>
      <div className='content_vacation_days'>
        <div className='content_count_days'>
          <span className='content_title'>Since Last Vacation : </span>
          <span className='content_days'>25</span>
          <span className='content_font'>days</span>
        </div>
        {/* <div>
          <span>Paid Time Off Left :</span>
          <span>100</span>
          <span>days</span>
        </div> */}
      </div>
      <LastPlace />
      <BucketList />
    </div>
  );
};

export default ContentContainer;
