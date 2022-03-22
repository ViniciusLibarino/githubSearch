import React from 'react';
import { Wrapper, GithubImage, Text } from './styles';

const EmptyUsersList = ({ keyboardShow, text }) => {
  return (
    <Wrapper>
      {!keyboardShow && (
        <GithubImage
          source={{
            uri: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
          }}
        />
      )}
      <Text>{text ? text : 'Está meio vazio por aqui!'}</Text>
      <Text>Busque por um usuário.</Text>
    </Wrapper>
  );
};

export default EmptyUsersList;
