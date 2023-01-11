import React, { useState } from 'react';
import './Cart.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useGlobalContext } from '../../context/GlobalContext';
import CartItem from '../../components/CartItem/CartItem';
import { formatPrice } from '../../utils/formatPrice';

const Cart = () => {
  const [buttonText, setButtonText] = useState('Place Order');
  useDocumentTitle('Cart');
  const { cartItems, emptyCart } = useGlobalContext();

  const cartItemsElements = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={item}
    />
  ));

  const placeOrder = () => {
    setButtonText('Ordering...');
    setTimeout(() => {
      console.log('Order sended');
      setButtonText('Place Order');
      emptyCart();
    }, 3000);
  };

  return (
    <section>
      <div className='section section-center'>
        <h1 className='cart__title'>Checkout</h1>
        <div className='cart__container'>
          {cartItems.length > 0 && cartItemsElements}
        </div>
        <p className='cart__total'>
          Total: {formatPrice(cartItems.length * 5.99)}
        </p>
        <div className='cart__order'>
          {cartItems.length > 0 ? (
            <button
              type='button'
              className='btn'
              onClick={placeOrder}>
              {buttonText}
            </button>
          ) : (
            <p>You have no items in your cart</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
