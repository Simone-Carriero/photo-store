import React from 'react';
import PhotosContainer from '../components/PhotosContainer/PhotosContainer';
import { useGlobalContext } from '../context/GlobalContext';

const Photos = () => {
  const { allPhotos } = useGlobalContext();
  return (
    <section>
      <PhotosContainer allPhotos={allPhotos} />
    </section>
  );
};

export default Photos;
