import React, { Component, useState, useEffect } from 'react';
import Bucket from './Bucket';
import AddBucketList from './AddBucketList';
import BucketListService from '../service/bucketListService';

const BucketList = () => {
  const [addClick, setAddClick] = useState(false);
  const [buckets, setBuckets] = useState([]);
  const [postCall, setPostCall] = useState(false);

  useEffect(async()=> {
    const result = await BucketListService.getBucketList('/api/bucketlist');
    setBuckets(result);
  },[postCall])

  const addClickHandler = () => {
    if (!addClick) return setAddClick(true);
    return setAddClick(false);
  };

  const addPlaceHandler = async(place) => {
    addClickHandler();
    const result = await BucketListService.postBucketPlace('/api/addbucketlist', place);
    if (!postCall) return setPostCall(true);
    return setPostCall(false);
  }

  const bucket = buckets.map((place, i) => {
    return (
      <Bucket
        key={i}
        id={i}
        place={place.name}
        picture={place.image}
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
      {addClick && <AddBucketList addPlaceHandler={addPlaceHandler} addClickHandler={addClickHandler} />}
    </div>
  );
};

export default BucketList;
