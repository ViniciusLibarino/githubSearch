import React, { useState, useEffect } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { useFavorite } from '../../hooks/useFavorite';
import Header from '../../components/Header';
import Card from '../../components/Card';
import {
  Wrapper,
  Question,
  Button,
  RepositoriesList,
  RepositoryItem,
  RepositoryWrapper,
  RepositoryTitle,
  RepositoryDescription,
} from './styles';

const UserRepositories = () => {
  const { user } = useRoute().params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useFavorite();

  useEffect(() => {
    async function favoriteUser() {
      if (isFavorite) {
        await addFavorite(user);
      } else {
        await removeFavorite(user);
      }
    }
    favoriteUser();
  }, [isFavorite]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get(`/users/${user.login}/repos`);
      let data = [];

      response.data.map((repository) => {
        let { id, name, description, html_url } = repository;

        if (description && !description.length < 29) {
          description = `${description.slice(0, 29)}...`;
        }

        data = [...data, { id, name, description, html_url }];
      });

      setRepositories(data);
    }
    loadRepositories();
  }, [user]);

  useEffect(() => {
    async function verifyFavoriteStatus() {
      favorites.forEach((favorite) => {
        if (favorite.id === user.id) {
          setIsFavorite(true);
        }
      });
    }
    verifyFavoriteStatus();
  }, []);

  return (
    <>
      <Header />
      <Card>
        <Wrapper>
          <Question>Favoritar {user.login}?</Question>
          <Button
            onPress={() => setIsFavorite(!isFavorite)}
            activeOpacity={0.7}
          >
            {isFavorite ? (
              <FontAwesome name="heart" color="#e02041" size={20} />
            ) : (
              <FontAwesome name="heart-o" color="#363636" size={20} />
            )}
          </Button>
        </Wrapper>

        <RepositoriesList
          data={repositories}
          keyExtractor={(repository) => String(repository.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: repository }) => (
            <RepositoryItem>
              <FontAwesome name="folder" size={42} color="#7EB6FF" />

              <RepositoryWrapper>
                <RepositoryTitle>{repository.name}</RepositoryTitle>
                <RepositoryDescription>
                  {repository.description}
                </RepositoryDescription>
              </RepositoryWrapper>
            </RepositoryItem>
          )}
        />
      </Card>
    </>
  );
};

export default UserRepositories;
