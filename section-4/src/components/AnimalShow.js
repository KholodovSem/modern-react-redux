import '../AnimalShow.css';
import React, { useState } from 'react';
import bird from '../img/bird.svg';
import cat from '../img/cat.svg';
import cow from '../img/cow.svg';
import dog from '../img/dog.svg';
import gator from '../img/gator.svg';
import horse from '../img/horse.svg';
import heart from '../img/heart.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart
}

/* 
    Import SVG into the component
*/

const AnimalShow = ({ type }) => {
  const [heartSize, setHeartSize] = useState(0);

  const handleClick = () => {
    if (heartSize >= 10) {
      return;
    }
    setHeartSize(heartSize + 1);
  }

  return (
    <div className='animal-show' onClick={handleClick}>
      <img
        className='animal'
        src={svgMap[type]}
        alt='animal' />
      <img
        className='heart'
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * heartSize }}
      />
    </div>
  )
}

export default AnimalShow;