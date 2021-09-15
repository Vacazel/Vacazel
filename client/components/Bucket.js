import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Bucket = ({ id, place, picture, DeleteBucket }) => {
  return (
    <div >
      <img className='bucket_box' src={picture} />
      <div className='bucket_name'>
        <div>{place}</div>
        <button className='bucket_delete' onClick={() => DeleteBucket(id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default Bucket;
