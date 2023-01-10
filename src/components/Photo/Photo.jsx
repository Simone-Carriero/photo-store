import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import './Photo.css';

const Photo = ({ img, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useGlobalContext();
  const imageRef = useRef(null);
  const { url, isFavorite } = img;

  const mouseEnter = () => setIsHovered(true);
  const mouseOut = () => setIsHovered(false);

  useEffect(() => {
    imageRef.current.addEventListener('mouseenter', mouseEnter);
    imageRef.current.addEventListener('mouseleave', mouseOut);

    return () => {
      imageRef.current.removeEventListener('mouseenter', mouseEnter);
      imageRef.current.removeEventListener('mouseleave', mouseOut);
    };
  }, []);

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
      ref={imageRef}>
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
