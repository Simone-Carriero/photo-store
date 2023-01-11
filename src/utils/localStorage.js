export const addCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartFromLocalStorage = () => {
  const result = localStorage.getItem('cart');
  const cart = result ? JSON.parse(result) : [];
  return cart;
};
