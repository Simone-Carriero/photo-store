import React from 'react';
import PhotosContainer from '../components/PhotosContainer/PhotosContainer';
import { useGlobalContext } from '../context/GlobalContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Favorite = () => {
  useDocumentTitle('Favorite');
  const { allPhotos } = useGlobalContext();
  const favoritePhotos = allPhotos.filter(photo => photo.isFavorite)
  return (
    <section>
      <PhotosContainer allPhotos={favoritePhotos} />
    </section>
  );
};

export default Favorite;
