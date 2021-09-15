import React, { Component, useState, useEffect } from 'react';
import Bucket from './Bucket';
import AddBucketList from './AddBucketList';
import BucketListService from '../service/bucketListService';

const BucketList = () => {
  const [addClick, setAddClick] = useState(false);

  const addClickHandler = () => {
    if (!addClick) return setAddClick(true);
    return setAddClick(false);
  };

  const places = [
    'Hawaii',
    'Barcelona',
    'Seoul',
    'Sydney',
    'New York',
    'Tokyo',
  ];
  const picture = 'https://via.placeholder.com/250x275';
  const bucket = places.map((place, i) => {
    return (
      <Bucket
        key={i}
        id={i}
        place={place}
        picture={picture}
        DeleteBucket={DeleteBucket}
      />
    );
  });

  const DeleteBucket = (id) => {};

  return (
    <div className='bucketlist'>
      <div className='bucketlist_title'>
        <div className='content_title'>Your dreamy vacation places</div>
        <button className='bucket_addBtn' onClick={addClickHandler}>
          + Add Bucket List
        </button>
      </div>
      <ul className='bucket_items'>{bucket}</ul>
      {addClick && <AddBucketList addClickHandler={addClickHandler} />}
    </div>
  );
};

export default BucketList;
