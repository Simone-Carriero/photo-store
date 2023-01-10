import React, { useState, useEffect, useContext } from 'react';

const url =
  'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const value = {
    allPhotos,
    toggleFavorite,
    addToCart,
    removeFromCart,
    emptyCart,
    cartItems,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
