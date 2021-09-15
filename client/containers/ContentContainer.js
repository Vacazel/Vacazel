import React, { Component, useState, useEffect } from 'react';
import LastPlace from '../components/LastPlace';
import BucketList from '../components/BucketList';
import UserDataService from '../service/userDataService';

const ContentContainer = () => {
  const [countDays, setCountDays] = useState(0);
  const [updatePlace, setUpdatePlace] = useState();
  const [lastPlace, setLastPlace] = useState({
    startDate: '12/17/2020',
    endDate: '12/27/2020',
    place: 'Paris',
    budget: '3000',
    image: '',
  });

  const calculateDate = () => {
    const currentDate = new Date(
      new Date().getMonth() +
        1 +
        '/' +
        new Date().getDate() +
        '/' +
        new Date().getFullYear()
    );
    const endDate = new Date(lastPlace.endDate);
    const days =
      (currentDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24);

    return Math.ceil(days);
  };

  useEffect(async() => {
    const result = await UserDataService.getUserData('/api')
    console.log(result);
    const result2 = await UserDataService.getUserData('/api/bucketlist')
    console.log(result2);
    const result3 = await UserDataService.getUserData('/api/getlocations')
    console.log(result3);
    // get request from server to update last place.
    // when there is change on updatePlace, we will call the get request,
    // we need to setLastPlace from the axios call.
    // console.log(updatePlace);
    setCountDays(calculateDate());
  }, [updatePlace]);

  return (
    <div className='content_container'>
      <div className='content_vacation_days'>
        <div className='content_count_days'>
          <span className='content_title'>Since Last Vacation : </span>
          <span className='content_days'>{countDays}</span>
          <span className='content_font'>days</span>
        </div>
        {/* <div>
          <span>Paid Time Off Left :</span>
          <span>100</span>
          <span>days</span>
        </div> */}
        <div className='small_font'> This is time to go to a vacation!</div>
      </div>

      <LastPlace lastPlace={lastPlace} setUpdatePlace={setUpdatePlace} />
      <BucketList />
    </div>
  );
};

export default ContentContainer;
