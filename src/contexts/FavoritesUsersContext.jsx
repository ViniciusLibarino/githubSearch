import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesUsersContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFavorites() {
      const favorites = await AsyncStorage.getItem('@githubSearch:favorites');
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    }
    getFavorites();
  }, []);

  return (
    <FavoritesUsersContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoritesUsersContext.Provider>
  );
}
