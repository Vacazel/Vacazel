import React, { Component, useState, useEffect } from 'react';
import LastPlace from '../components/LastPlace';
import BucketList from '../components/BucketList';
import UserDataService from '../service/userDataService';

const ContentContainer = ({ setIsUser }) => {
  const [countDays, setCountDays] = useState(0);
  const [updatePlace, setUpdatePlace] = useState();
  const [lastPlace, setLastPlace] = useState({
    startDate: '06/03/2019',
    endDate: '08/01/2019',
    place: 'New York',
    budget: '3000',
    image: '',
    id: '',
    payDayOff: '',
  });

  useEffect(() => {
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

    setCountDays(Math.ceil(days));
  }, [lastPlace]);

  useEffect(async () => {
    const result = await UserDataService.getUserData('/api');
    console.log(result);
    // get request from server to update last place.
    // when there is change on updatePlace, we will call the get request,
    // we need to setLastPlace from the axios call.

    setLastPlace({
      startDate: result.currentUser.start_date,
      endDate: result.currentUser.end_date,
      place: result.lastPlaceVisted.last_place_visited,
      budget: result.currentUser.budget,
      image: result.lastPlaceVisted.image,
      id: result.currentUser.id,
      payDayOff: result.currentUser.paid_time_off_left,
    });
    setIsUser({
      username: result.currentUser.username,
      userID: result.currentUser.id,
    });
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

      <LastPlace
        setUpdatePlace={setUpdatePlace}
        setLastPlace={setLastPlace}
        lastPlace={lastPlace}
      />
      <BucketList />
    </div>
  );
};

export default ContentContainer;
