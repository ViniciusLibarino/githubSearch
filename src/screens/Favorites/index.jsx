import React from 'react';
import {
  Container,
  Title,
  FavoriteList,
  ListWrapper,
  Wrapper,
  ProfileImage,
  RemoveButton,
  Username,
} from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useFavorite } from '../../hooks/useFavorite';
import Header from '../../components/Header';
import GlobalContent from '../../components/GlobalContent';
import EmptyUsersList from '../../components/EmptyUserList';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorite();

  return (
    <>
      <Header />
      <GlobalContent>
        <Container>
          <Title>Meus favoritos</Title>
          {favorites.length === 0 ? (
            <EmptyUsersList text="Você ainda não favoritou ninguém." />
          ) : (
            <FavoriteList
              data={favorites}
              keyExtractor={(user) => String(user.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: user }) => (
                <ListWrapper>
                  <Wrapper>
                    <ProfileImage source={{ uri: user.avatar_url }} />
                    <Username>{user.login}</Username>
                  </Wrapper>
                  <RemoveButton onPress={() => removeFavorite(user)}>
                    <FontAwesome name="trash" size={18} color="#e02041" />
                  </RemoveButton>
                </ListWrapper>
              )}
            />
          )}
        </Container>
      </GlobalContent>
    </>
  );
};

export default Favorites;
