import React from 'react';
import './Photo.css';

const Photo = ({ img, className }) => {
  const { url, isFavorite } = img;
  return (
    <div className={`${className}`}>
      <img
        src={url}
        alt='photo'
      />
    </div>
  );
};

export default Photo;
