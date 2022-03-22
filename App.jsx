import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import FavoritesProvider from './src/contexts/FavoritesUsersContext';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#040404" />
      <FavoritesProvider>
        <Routes />
      </FavoritesProvider>
    </>
  );
}
