import React, { useState, useEffect } from 'react';
import { Keyboard, Alert } from 'react-native';
import { Container, Input, Button, ListContainer, Title, List } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';
import EmptyUsersList from '../../components/EmptyUserList';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ListItem from '../../components/ListItem';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardShow(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardShow(false));
  }, []);

  async function handleSearchUser() {
    Keyboard.dismiss();

    if (username === '') {
      Alert.alert('Você deve buscar por um usuário.', [
        {
          text: 'Tentar novamente',
        },
      ]);
      return;
    }

    const response = await api.get(`/search/users?q=${username}`);

    if (response.data.total_count === 0) {
      Alert.alert('Nenhum usuário encontrado.', [
        {
          text: 'Tentar novamente',
        },
      ]);
      return;
    }

    setUsers(response.data.items);
    setUsername('');
  }

  return (
    <>
      <Header />
      <Card>
        <Container>
          <Input
            placeholder="Buscar usuário"
            value={username}
            onChangeText={(event) => setUsername(event)}
            autoCorrect={false}
          />
          <Button onPress={handleSearchUser} activeOpacity={0.7}>
            <FontAwesome name="search" size={25} color="#fff" />
          </Button>
        </Container>

        {users.length === 0 ? (
          <EmptyUsersList keyboardShow={keyboardShow} />
        ) : (
          <ListContainer>
            <Title>Usuários encontrados</Title>
            <List
              data={users}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <ListItem user={item} />}
            />
          </ListContainer>
        )}
      </Card>
    </>
  );
};

export default Home;
