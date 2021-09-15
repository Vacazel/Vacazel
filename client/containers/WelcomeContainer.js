import React, { Component, useState, useEffect } from 'react';
import WelcomeImage from '../components/WelcomeImage';
import UserDataService from '../service/userDataService';

const WelcomeContainer = () => {
  const [randomPlace, setRandomPlace] = useState([])

  useEffect(async()=> {
    const result = await UserDataService.getUserData('/api/getlocations')
    const result2 = {}
    let add = 0
    while(add < 4) {
      const inx = Math.floor(Math.random() * result.length);
      const cache = result[inx];
      if (!result2[cache.id]){
        result2[cache.id] = cache;
        add++;
      }
    }
    const result3 = Object.values(result2);
    setRandomPlace(result3);
  },[])

  const randomImg = randomPlace.map((place, i) =>{
    return < WelcomeImage key={i} id={place.id} name={place.name} image={place.image}/>
  })

  return (
    <div className='welcome_container'>
      <div className='main_banner'>
        <p className='main_title'> WELCOME TO VACAZEL</p>
      </div>

      <div className='sub_banner'>
        <p className='sub_title'>Inspiration for Future Getaways</p>
        <div className='sub_banner_pic'>
          {randomImg}
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
