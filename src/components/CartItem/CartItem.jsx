import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import './CartItem.css';
import useHover from '../../hooks/useHover';

const CartItem = ({ item }) => {
  const { removeFromCart } = useGlobalContext();
  const [ref, isHovered] = useHover();

  const { id, url } = item;

  const iconClassName = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className='cart-item'>
      <div className='cart-item__container'>
        <i
          onClick={() => removeFromCart(id)}
          className={iconClassName}
          ref={ref}></i>
        <img
          src={url}
          alt='photo'
          className='cart-item__img'
        />
      </div>
      <p className='cart-item__price'>$5.99</p>
    </div>
  );
};

export default CartItem;
