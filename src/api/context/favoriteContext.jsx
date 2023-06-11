import React, { createContext, useEffect, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favoriteItems, setFavoriteItems] = useState(storedFavorites);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

 const addFavoriteItem = (item) => {
   if (!favoriteItems.find((favItem) => favItem.id === item.id)) {
     setFavoriteItems((prevItems) => [...prevItems, item]);
   }
 };

const removeFavoriteItem = (itemId) => {
  setFavoriteItems((prevItems) => {
    const updatedItems = prevItems.filter((item) => item.id !== itemId);
    return updatedItems;
  });
};

  const isItemFavorite = (itemId) => {
    return favoriteItems.some((item) => item.id === itemId);
  };


  const favoriteContextValue = {
    favoriteItems: favoriteItems || [],
    addFavoriteItem,
    removeFavoriteItem,
    isItemFavorite,
  };

  return (
    <FavoriteContext.Provider value={favoriteContextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;