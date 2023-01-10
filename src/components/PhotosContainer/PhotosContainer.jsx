import React from 'react';
import Photo from '../Photo/Photo';
import { getClass } from '../../utils/getClass';
import './PhotosContainer.css';

const PhotosContainer = ({ allPhotos }) => {
  const imageElements = allPhotos.map((img, i) => (
    <Photo
      key={img.id}
      img={img}
      className={getClass(i)}
    />
  ));
  return <div className='photos-container'>{imageElements}</div>;
};

export default PhotosContainer;
