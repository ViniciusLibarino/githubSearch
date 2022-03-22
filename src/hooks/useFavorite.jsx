import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { FavoritesUsersContext } from '../contexts/FavoritesUsersContext';

export function useFavorite() {
  const context = useContext(FavoritesUsersContext);
  if (!context) {
    throw new Error('Não há um contexto para ser consumido por useContext.');
  }

  const { favorites, setFavorites } = context;

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
