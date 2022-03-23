import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { FavoritesUsersContext } from '../contexts/FavoritesUsersContext';

export function useFavorite() {
  const { favorites, setFavorites } = useContext(FavoritesUsersContext);

  async function addFavorite(user) {
    const { id, login, avatar_url } = user;
    let isDuplicated = false;

    favorites.forEach((favorite) => {
      if (favorite.id === user.id) {
        isDuplicated = true;
      }
    });

    if (!isDuplicated) {
      const newFavorites = [...favorites, { id, login, avatar_url }];

      setFavorites(newFavorites);
      await AsyncStorage.setItem(
        '@githubSearch:favorites',
        JSON.stringify(newFavorites)
      );
    }
  }

  async function removeFavorite(user) {
    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== user.id
    );

    setFavorites(newFavorites);
    await AsyncStorage.setItem(
      '@githubSearch:favorites',
      JSON.stringify(newFavorites)
    );
  }

  return { favorites, addFavorite, removeFavorite };
}
