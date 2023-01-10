import React from 'react';
import PhotosContainer from '../components/PhotosContainer/PhotosContainer';
import { useGlobalContext } from '../context/GlobalContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Photos = () => {
  useDocumentTitle('Homepage');
  const { allPhotos } = useGlobalContext();
  return (
    <section>
      <PhotosContainer allPhotos={allPhotos} />
    </section>
  );
};

export default Photos;
