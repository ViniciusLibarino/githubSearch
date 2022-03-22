import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container, Wrapper, ProfileImage, Username } from './styles';

const ListItem = ({ user }) => {
  const navigation = useNavigation();

  function handleUserRepositories() {
    navigation.navigate('UserRepositories', { user });
  }

  return (
    <Container onPress={handleUserRepositories} activeOpacity={0.7}>
      <Wrapper>
        <ProfileImage source={{ uri: user.avatar_url }} />
        <Username>{user.login}</Username>
      </Wrapper>
      <FontAwesome name="angle-right" size={18} color="#7a7a7a" />
    </Container>
  );
};

export default ListItem;
