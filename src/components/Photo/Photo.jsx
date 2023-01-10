import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import useHover from '../../hooks/useHover';
import './Photo.css';

const Photo = ({ img, className }) => {
  const [ref, isHovered] = useHover();
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useGlobalContext();
  const { url, isFavorite } = img;

  function heartIcon() {
    if (isFavorite) {
      return (
        <i
          className='ri-heart-fill favorite'
          onClick={() => toggleFavorite(img.id)}></i>
      );
    } else if (isHovered) {
      return (
        <i
          className='ri-heart-line favorite'
          onClick={() => toggleFavorite(img.id)}></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className='ri-shopping-cart-fill cart'
          onClick={() => removeFromCart(img.id)}></i>
      );
    } else if (isHovered) {
      return (
        <i
          className='ri-add-circle-line cart'
          onClick={() => addToCart(img)}></i>
      );
    }
  }

  return (
    <div
      className={`photo ${className}`}
      ref={ref}>
      <img
        src={url}
        alt='photo'
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

export default Photo;
